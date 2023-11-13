// patients management to be used by the doctor
import { AppointmentMngt } from "./AppointmentMngt";
import { PatientMngmt } from "./PatientMngmt";

export default function Patients() {
  return (
    <div className="flex justify-around h-screen">
      <PatientMngmt />
      <AppointmentMngt />
    </div>
  );
}
