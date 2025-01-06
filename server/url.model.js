import mongoose, { Schema } from "mongoose";

const urlSchema = new mongoose.Schema({
    originalURL: {
        type: String,
    },
    shortURL: {
        type: String,
    }
}, { timestamps: true })

export const Url = mongoose.model("Url", urlSchema);