import { Router  } from "express";
import { registerOrLogIn } from "../controllers/auth";
import { validate } from "./../middlewares";
import { joinSchema } from "../schema-validations";

const router = Router();


router.post("/join",validate(joinSchema),registerOrLogIn);
export { router }