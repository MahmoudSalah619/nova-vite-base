import { Dropdown } from "antd";
import { CustomMenuProps } from "./types";

export default function Menu({ items, children }: CustomMenuProps) {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      {children}
    </Dropdown>
  );
}
