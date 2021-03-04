import express from 'express';
import routes from './api';

const app = express();
const port = 3001;

app.use(routes);

app.listen(port, () => {
    return console.log(`The server is listening on port: ${port}`)
})