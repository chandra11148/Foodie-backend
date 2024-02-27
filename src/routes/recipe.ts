import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createRecipeSchema, getRecipeSchema, getUserRecipesSchema, searchRecipeSchema } from "../schema-validations";
import { createRecipe, getAllRecipes, getRecipe, getUserRecipes, searchRecipe } from "../controllers/recipe";
import passport from "passport";

const router = Router();
 

router.get("/",passport.authenticate("jwt",{session:false}),getAllRecipes);
router.get("/find",passport.authenticate("jwt",{session:false}),validate(searchRecipeSchema),searchRecipe);

router.post("/create",passport.authenticate("jwt",{session:false}), validate(createRecipeSchema),createRecipe);
router.get("/user/:userId",passport.authenticate("jwt",{session:false}), validate(getUserRecipesSchema),getUserRecipes);
router.get("/:id",passport.authenticate("jwt",{session:false}), validate(getRecipeSchema),getRecipe);

export { router }