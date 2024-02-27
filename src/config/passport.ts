import { Strategy, ExtractJwt } from "passport-jwt";
import { PassportStatic } from "passport";
import { User } from "../models";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

export const authenticate = (passport: PassportStatic) => {
  passport.use(
    new Strategy(options, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user?._id);
        }
        return done(null, false);
      } catch (err) {
        console.log(err);
      }
    })
  );
};