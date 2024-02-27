import { Request,Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { CONSTANTS } from "../constants";


const signToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string,{
        expiresIn: process.env.JWT_EXPIRESIN as string,
    });
};

export const registerOrLogIn = async (req:Request,res:Response)=>{
    const { email,password }:{email:string,password:string} = req.body;
    try{
        const _user = await User.findOne({email}).select("+password").exec();
        if(_user){
            if(!(await(bcrypt.compare(password, _user.password)))){
               return res.status(404).json({error:"Invalid email or password"});

            }
            const token = signToken(_user?.id);
            return res.status(200).json({ token, email, id: _user?.id});
        }
        const newUser = await User.create({email,password: await bcrypt.hash(password, CONSTANTS.SALT )});
        const token = signToken(newUser._id);

        return res.status(201).json({ token,email:newUser?.email,id:newUser._id});
    }catch(err){
        console.log(err);
        return res.status(500).json({ error: "An error occured while processing your request"});
    }
    
};