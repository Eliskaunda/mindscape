import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import supabase from "../services/Supabase";
const items = [
  {
    key: "1",
    label: <div onClick={() => supabase.auth.signOut()}>Logout</div>,
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="">
        Settings
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
];
const DropMenu = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default DropMenu;
