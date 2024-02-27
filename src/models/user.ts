import { Schema , model, models, Model } from "mongoose";
interface IUser{
    _id?:string;
    email:string;
    password:string;
} 

const userSchema = new Schema<IUser>(
    {
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            index:true
        },
        password:{
            type:String,
            required:true,
            select:false
        }
    },{
        timestamps:true,
        autoIndex:true,
        toJSON:{virtuals:true},
        toObject:{ virtuals:true }
    }
)
export const User = (models.User as Model<IUser>)|| model<IUser>("User",userSchema);