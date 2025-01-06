import express from "express";
import 'dotenv/config';
import connectDB from "./db.js";
import { Url } from "./url.model.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

connectDB();

function generateUniquekey() {
    let uniqueKey = "";

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 5; i++) {
        if (i % 2 == 0 && i <= 2) {
            uniqueKey += String.fromCharCode(generateRandomNumber(65, 90));
        }
        else if (i % 2 == 0) {
            uniqueKey += String.fromCharCode(generateRandomNumber(97, 122));
        }
        else {
            uniqueKey += Math.floor(Math.random() * 9) + 1;
        }
    }

    return uniqueKey;
}

//API Route
app.post('/shorten', async (req, res) => {
    const { url } = req.body;
    const shortURL = generateUniquekey();

    try {
        const newUrl = new Url({ originalURL: url, shortURL })
        await newUrl.save();

        const shortenedUrl = `http://localhost:3000/${shortURL}`;
        res.status(201).json({ shortenedUrl });
    } catch (error) {
        res.status(500).json({ error: "Failed to save URL" });
    }
})

app.get('/:shortURL', async (req, res) => {
    const shortURL = req.params.shortURL;

    try {
        const urlData = await Url.findOne({ shortURL })

        if (urlData) {
            return res.redirect(urlData.originalURL);
        }
        else {
            return res.status(400).send('404 not found');
        }
    } catch (error) {
        return res.status(500).send('Server Error');
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})