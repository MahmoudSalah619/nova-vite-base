import { useNavigate, useSearchParams } from "react-router-dom";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import columns from "./static";

function AllWorkOrderProductsOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      productId: `#1636884473`,
      warehouse: "V-HC-A55",
      quantity: "15",
      category: "Tech-CD-2",
      workOrder: "ADCD-123",
      lineStatus: "Used",
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    searchParams.delete("queryTitles");
    setSearchParams(searchParams, { replace: true });
    navigate(`${record.id}?queryTitles=Work Order Details`);
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle="ACITVE_WORK_ORDER_PRODUCTS"
      columns={columns}
      dataSource={data}
      tableFilters={["search", "work_order_type", "projects", "lineStatus"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AllWorkOrderProductsOrganism;
