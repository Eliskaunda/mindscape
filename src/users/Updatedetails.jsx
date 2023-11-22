import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";

function Updatedetails() {
  return (
    <div className="h-full">
      <Form>
        <FormRow label="First Name">
          <input
            type="text"
            className="text-base px-1 py-2 focus:outline-none border b-red-400"
            placeholder="First Name"
          />
        </FormRow>

        <FormRow label="Last Name">
          <input
            type="text"
            className="text-base px-1 py-2 focus:outline-none border b-red-400"
            placeholder="Last Name"
          />
        </FormRow>

        <FormRow label="Phone Number">
          <input
            type="text"
            className="text-base px-1 py-2 focus:outline-none border b-red-400"
            placeholder="Phone Number"
          />
        </FormRow>

        <FormRow label="Role">
          <select className="text-base px-1 py-2 focus:outline-none border b-red-400">
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </FormRow>

        <FormRow label="Gender">
          <select className="text-base px-1 py-2 focus:outline-none border b-red-400">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </FormRow>

        <FormRow>
          <button className="text-[1.3rem] border rounded-md bg-blue text-grey px-2 py-1 ">
            Submit
          </button>
        </FormRow>
      </Form>
    </div>
  );
}

export default Updatedetails;
