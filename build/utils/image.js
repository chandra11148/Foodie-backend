"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateImageType = exports.SUPPORTED_FORMATS = void 0;
exports.SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/JPEG",
    "image/JPG",
    "image/png",
    "image/PNG",
];
const validateImageType = (value) => {
    if (value) {
        return exports.SUPPORTED_FORMATS.includes(value.mimetype);
    }
};
exports.validateImageType = validateImageType;
