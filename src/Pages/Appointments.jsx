import { useState } from "react";
import AppointmentCard from "../features/Appointments/AppointmentCard";
import AppointmentForm from "./../features/Appointments/AppointmentForm";

function Appointments() {
  const [appForm, setAppform] = useState(false);
  return (
    <div className="mx-8 my-4">
      <div className="space-y-4">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold">Appointments</h1>
          <button
            className=" text-black border border-blue px-2 py-3 text-sm rounded-md"
            onClick={() => setAppform((form) => !form)}
          >
            Book Appointment
          </button>
        </div>
        {appForm && <AppointmentForm setAppform={setAppform} />}{" "}
        <p>This is where you can manage your appointments.</p>
      </div>

      <div className="flex flex-1 flex-wrap gap-6 p-4 ">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </div>
  );
}

export default Appointments;
