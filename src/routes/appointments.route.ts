import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const appointmetnsRouter = Router();

interface Appointment {
    id: string;
    provider: string;
    date: Date;
}

const appointments: Appointment[] = [];

appointmetnsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;
    
    const parsedDate = startOfHour(parseISO(date));
    
    const findAppointmentInSameDate = appointments.find(appointment => 
        isEqual(parsedDate, appointment.date)
    );

    if(findAppointmentInSameDate) {
        return response 
            .status(400)
            .json({message: 'Horario ja ocupado'});
    }

    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate,
    };

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmetnsRouter;