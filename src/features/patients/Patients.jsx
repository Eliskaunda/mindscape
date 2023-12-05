// patients management to be used by the doctor
import { useState } from "react";
import { AppointmentMngt } from "./AppointmentMngt";
import { PatientMngmt } from "./PatientMngmt";

export default function Patients() {
  const [viewpatient, setViewpatient] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-around md:h-full">
      <PatientMngmt viewpatient={viewpatient} setViewpatient={setViewpatient} />
      <AppointmentMngt
        viewpatient={viewpatient}
        setViewpatient={setViewpatient}
      />
    </div>
  );
}
