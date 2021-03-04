import { Router } from 'express';
import newsRoutes from './news';

const routes = Router();

routes.use('/news', newsRoutes);

export default routes;