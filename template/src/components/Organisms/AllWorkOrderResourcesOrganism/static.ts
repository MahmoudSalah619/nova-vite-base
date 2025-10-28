import { MainTableOrganismProps } from "../MainTableOrganism/types";

const columns: MainTableOrganismProps["columns"] = [
  {
    title: "Resource",
    dataIndex: "resource",
    key: "resource",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
  {
    title: "Work Order ID",
    dataIndex: "workOrderId",
    key: "workOrderId",
  },
  {
    title: "Booking",
    dataIndex: "booking",
    key: "booking",
  },
  {
    title: "Create Date",
    dataIndex: "createDate",
    key: "createDate",
  },
];

export default columns;
