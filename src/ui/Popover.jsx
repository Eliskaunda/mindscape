import { Popover } from "antd";

function Popcontent({ children, title }) {
  return (
    <Popover title={title} style={{ width: "30%" }}>
      {children}
    </Popover>
  );
}

export default Popcontent;
