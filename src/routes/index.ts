import { Router } from 'express';

import appointmetnsRouter from './appointments.route';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.route';

const routes = Router();

routes.use('/appointments', appointmetnsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
