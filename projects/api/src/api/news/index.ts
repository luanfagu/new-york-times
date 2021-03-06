import {Router, Request, Response} from 'express';
import axios from 'axios';
import HttpClient from '../../services/http-client';
import { NytApiResponse } from '../../types/nyt-api-response';

const newsRoutes = Router();

newsRoutes.get('/', async (req, res) => {
    const techNews = (await HttpClient.get<NytApiResponse>('/technology.json')).results;
    const scienceNews = (await HttpClient.get<NytApiResponse>('/science.json')).results;

    return res.json([
        ...techNews,
        ...scienceNews
    ]);
});

export default newsRoutes;