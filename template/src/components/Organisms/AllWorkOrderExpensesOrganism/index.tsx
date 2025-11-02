import { useNavigate, useSearchParams } from "react-router-dom";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import columns from "./static";

function AllWorkOrderExpensesOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 1010 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      name: "قفل باب حديد",
      workOrder: "ADCD-123",
      category: "Tech-CD-2",
      quantity: "15",
      costPrice: "550.00",
      postingDate: "12 May,2024 12:23 AM",
      lineStatus: "Used",
      serviceType: "mahmoud salah Mahmoud",
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    searchParams.delete("queryTitles");
    setSearchParams(searchParams, { replace: true });
    navigate(
      `${record.id}?queryTitles=Work Order Resource Details,${record.name}`
    );
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle="ACITVE_WORK_ORDER_EXPENSES"
      columns={columns}
      dataSource={data}
      tableFilters={["search", "filterBy"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AllWorkOrderExpensesOrganism;
