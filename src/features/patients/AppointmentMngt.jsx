import { DatePicker } from "antd";
import patient from "/patient.svg";

export function AppointmentMngt() {
  return (
    <section className="w-full px-6 py-3">
      <h3>Appointment management</h3>
      <DatePicker />

      <div>
        {/* GET AN SVG WITH CALENDAR AND PATIENT */}

        <div className="flex flex-col items-center">
          <img src={patient} alt="" className="w-[20rem] py-8" />
          <p className="text-lg text-orange">
            Select a patient to view information
          </p>
        </div>
      </div>
    </section>
  );
}
