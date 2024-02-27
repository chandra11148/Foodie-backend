"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRecipeSchema = exports.joinSchema = exports.getUserRecipesSchema = exports.getRecipeSchema = exports.createRecipeSchema = void 0;
const yup = __importStar(require("yup"));
const createRecipeSchema = yup.object({
    body: yup.object({
        title: yup.string().required("title is required"),
        note: yup.string(),
        ingredients: yup.string().required("ingredients is required"),
        description: yup.string().required("description is required"),
    }),
});
exports.createRecipeSchema = createRecipeSchema;
const getRecipeSchema = yup.object({
    params: yup.object({
        id: yup.string().min(24).required("invalid request"),
    }),
});
exports.getRecipeSchema = getRecipeSchema;
const searchRecipeSchema = yup.object({
    query: yup.object({
        q: yup.string().required("invalid request"),
    }),
});
exports.searchRecipeSchema = searchRecipeSchema;
const getUserRecipesSchema = yup.object({
    params: yup.object({
        userId: yup.string().min(24).required("invalid request"),
    }),
});
exports.getUserRecipesSchema = getUserRecipesSchema;
//register or login
const joinSchema = yup.object({
    body: yup.object({
        email: yup.string().email().required("Email is required"),
        password: yup
            .string()
            .min(7, "password must be greater than 6")
            .required("Password is required"),
    }),
});
exports.joinSchema = joinSchema;
