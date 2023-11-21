// patients management to be used by the doctor
import { AppointmentMngt } from "./AppointmentMngt";
import { PatientMngmt } from "./PatientMngmt";

export default function Patients() {
  return (
    <div className="flex flex-col md:flex-row justify-around md:h-full">
      <PatientMngmt />
      <AppointmentMngt />
    </div>
  );
}
