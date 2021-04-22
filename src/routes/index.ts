import { Router } from 'express';
import appointmetnsRouter from './appointments.route';

const routes = Router();

routes.use('/appointments', appointmetnsRouter);

export default routes;
