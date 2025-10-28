import { MainTableOrganismProps } from "../MainTableOrganism/types";

const columns: MainTableOrganismProps["columns"] = [
  {
    title: "Product ID",
    dataIndex: "productId",
    key: "productId",
  },
  {
    title: "Warehouse",
    dataIndex: "warehouse",
    key: "warehouse",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Work Order",
    dataIndex: "workOrder",
    key: "workOrder",
  },
  {
    title: "Line Status",
    dataIndex: "lineStatus",
    key: "lineStatus",
  },
];

export default columns;
