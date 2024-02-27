"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
//middleware to validate req data
const validate = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.validate(Object.assign(Object.assign(Object.assign({}, ((req === null || req === void 0 ? void 0 : req.body) && { body: req.body })), ((req === null || req === void 0 ? void 0 : req.query) && { query: req.query })), ((req === null || req === void 0 ? void 0 : req.params) && { params: req.params })));
        return next();
    }
    catch (err) {
        return res.status(400).json({ error: err.message });
    }
});
exports.validate = validate;
