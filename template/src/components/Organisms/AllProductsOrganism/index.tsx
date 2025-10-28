import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import StatusMolecule from "../../Molecules/StatusMolecule";
import { useNavigate, useSearchParams } from "react-router-dom";
import { STATUS_ID } from "@/constants/Status";

function AllProductsOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Availablity",
      dataIndex: "availability",
      key: "availability",
      // TODO: should be remove number constructor after type is fixed
      render: (statusId) => (
        <StatusMolecule indicator statusId={Number(statusId)} />
      ),
    },
  ];
  // TODO: data source should be dynamic typed
  // @ts-ignore
  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      productId: `#1636884473`,
      productName: "Mina Ayman Maher",
      quantity: (i + 1).toString(),
      availability: STATUS_ID.ON_HOLD,
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    searchParams.delete("queryTitles");
    setSearchParams(searchParams, { replace: true });
    navigate(`/inventory/${record.id}?queryTitles=${record.productName}`);
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle="TOTAL_PRODUCTS"
      columns={columns}
      dataSource={data}
      tableFilters={["search", "projects", "work_order_type", "status"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AllProductsOrganism;
