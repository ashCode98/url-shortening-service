import express from "express";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use(express.json());

//API Route
app.post('/', (req, res) => {
    res.send("Hello world");
})

//Starting server
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})