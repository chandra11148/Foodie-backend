"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose_1 = require("mongoose");
const recipeSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.SchemaTypes.ObjectId, ref: "User" },
    title: { type: String, required: true, index: true },
    description: { type: String, required: true, index: true },
    note: { type: String, index: true },
    ingredients: { type: String, required: true, index: true },
    image: {
        url: { type: String, required: true },
        id: { type: String, required: true },
    },
}, {
    timestamps: true,
    autoIndex: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
// 3. Create a Model.
exports.Recipe = (0, mongoose_1.model)("Recipe", recipeSchema);
