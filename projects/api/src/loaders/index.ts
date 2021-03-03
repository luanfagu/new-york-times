import express from 'express';
import cors from 'cors';

export default ({ app }:  {app: express.Application}) => {
    app.use(cors());
}