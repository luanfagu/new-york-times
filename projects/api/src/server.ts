import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello world!!!!')
});

app.listen(port, () => {
    return console.log(`The server is listening on port: ${port}`)
})