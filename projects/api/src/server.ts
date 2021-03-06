import express from 'express';
import routes from './api';
import cors from 'cors';

require('dotenv').config()

const app = express();
const port = 3001;

app.use(cors());

app.use(routes);

app.listen(port, () => {
    return console.log(`The server is listening on port: ${port}`)
})