import { AppointmentStatus } from './appointment-status.enum';

export interface Appointment {
  id: string;
  patientId: string;
  nurseId: string;
  date: string;
  status: AppointmentStatus;
}
