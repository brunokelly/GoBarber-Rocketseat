import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const appointmetnsRouter = Router();

const appointments = [];

appointmetnsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    
    const appointment = {
        id: uuid(),
        provider,
        date,
    };

    appointments.push(appointment);

    return response.json({message: 'Hello'})
});

export default appointmetnsRouter;