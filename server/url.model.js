import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
    originalURL: {
        type: String,
        required: true,
        trim: true
    },
    shortURL: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

export const Url = mongoose.model("Url", urlSchema);