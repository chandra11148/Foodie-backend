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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const cloudinary_1 = require("cloudinary");
const buffer_to_stream_1 = __importDefault(require("buffer-to-stream"));
const sharp_1 = __importDefault(require("sharp"));
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});
const upload = (file, folder) => __awaiter(void 0, void 0, void 0, function* () {
    //resize image using sharp
    const bufferOfFile = yield (0, sharp_1.default)(file)
        .resize(1870)
        .webp({ quality: 90 })
        .toBuffer();
    return new Promise((resolve, reject) => {
        const upload = cloudinary_1.v2.uploader.upload_stream((error, result) => {
            resolve(result);
        });
        (0, buffer_to_stream_1.default)(bufferOfFile).pipe(upload), { resource_type: "auto", folder };
    });
});
exports.upload = upload;
