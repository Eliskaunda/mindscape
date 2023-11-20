import { DatePicker } from "antd";

export function AppointmentMngt() {
  return (
    <section className="w-full px-6 py-3">
      <h3>Appointment management</h3>
      <DatePicker />

      <div>
        <h1>View and manage appointments</h1>
        {/* GET AN SVG WITH CALENDAR AND PATIENT */}
      </div>
    </section>
  );
}
