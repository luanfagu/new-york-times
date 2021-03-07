import express from 'express';
import routes from './api';
import cors from 'cors';

require('dotenv').config()

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(routes);

const server = app.listen(port, () => {
    return console.log(`The server is listening on port: ${port}`)
})

export { server };