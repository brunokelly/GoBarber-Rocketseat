import { Router } from 'express';

import appointmetnsRouter from './appointments.route';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmetnsRouter);
routes.use('/users', usersRouter);

export default routes;
