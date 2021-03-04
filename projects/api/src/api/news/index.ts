import {Router, Request, Response} from 'express';
import axios from 'axios';

const newsRoutes = Router();

newsRoutes.get('/', async (req, res) => {
    const { data: techNews } = await axios.get('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=18jx8G9r3egCQHORFwN4aWvVp18h8adg')
    const { data: scienceNews } = await axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=18jx8G9r3egCQHORFwN4aWvVp18h8adg')

    return res.json({news: [
        ...techNews.results,
        ...scienceNews.results
    ]});
});

export default newsRoutes;