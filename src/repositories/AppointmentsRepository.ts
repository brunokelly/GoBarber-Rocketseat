import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

//#region INTERFACE
interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

//#endregion

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  //#region METODOS

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  //#endregion
}

export default AppointmentsRepository;
