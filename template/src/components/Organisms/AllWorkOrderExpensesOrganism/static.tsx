import { MainTableOrganismProps } from "../MainTableOrganism/types";
import UserAvatarAtom from "@components/Atoms/UserAvatarAtom";
import avatar from "@assets/images/avatar.jpg";

const columns: MainTableOrganismProps["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Work Order",
    dataIndex: "workOrder",
    key: "workOrder",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Cost Price",
    dataIndex: "costPrice",
    key: "costPrice",
  },
  {
    title: "Posting Date",
    dataIndex: "postingDate",
    key: "postingDate",
  },
  {
    title: "Line Status",
    dataIndex: "lineStatus",
    key: "lineStatus",
  },
  {
    title: "Service Type",
    dataIndex: "serviceType",
    key: "serviceType",
    render: (text) => <UserAvatarAtom user={text} avatar={avatar} />,
  },
];

export default columns;
