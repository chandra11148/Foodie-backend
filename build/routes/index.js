"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipeRouter = exports.authRouter = void 0;
const auth_1 = require("./auth");
Object.defineProperty(exports, "authRouter", { enumerable: true, get: function () { return auth_1.router; } });
const recipe_1 = require("./recipe");
Object.defineProperty(exports, "recipeRouter", { enumerable: true, get: function () { return recipe_1.router; } });
