import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import 'dotenv/config';

async function connectDB() {
    try {
        const URL = process.env.MONGODB_URI;
        await mongoose.connect(`${URL}/${DB_NAME}`);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1)
    }
}

connectDB();

// export default connectDB;