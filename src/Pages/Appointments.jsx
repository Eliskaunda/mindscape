import AppointmentCard from "../features/Appointments/AppointmentCard";

function Appointments() {
  return (
    <div className="mx-8 my-4">
      <div className="space-y-4">
        <h1 className="text-lg font-bold">Appointments</h1>
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
