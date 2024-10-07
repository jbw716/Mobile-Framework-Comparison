import express from 'express';
import cors from 'cors';
import { loremIpsum } from "lorem-ipsum";
import ngrok from 'ngrok';
const app = express();
const port = 3000;

app.use(cors());

app.get('/lorem/:count', (req, res) => {
    const count = req.params.count;
    const result = Array.from({ length: count }, getNewParagraph);
    res.send(result);
});

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
    const url = await ngrok.connect(port);
    console.log(`Public URL: ${url}`);
});

function getNewParagraph() {
    const result = loremIpsum({
        count: 1,
        units: 'paragraphs'
    });
    return result;
}