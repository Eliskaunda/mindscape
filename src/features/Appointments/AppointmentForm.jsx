import { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
} from "antd";

const AppointmentForm = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Choose Doctor">
        <Select>
          <Select.Option value="demo">Doctor&apos;s Name</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>

      <div className="flex gap-4">
        <Form.Item>
          <Button className="bg-orange text-white font-medium">
            Book Appointment
          </Button>
        </Form.Item>
        <Form.Item>
          <Button>Cancel</Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default AppointmentForm;
