import { useNavigate, useSearchParams } from "react-router-dom";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import columns from "./static";

function AllWorkOrderResourcesOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      resource: `Mina Ayman Maher`,
      startDate: "12 May,2024 12:23 AM",
      endDate: "12 May,2024 12:23 AM",
      duration: "1.50 hours",
      workOrderId: `ADCD-123`,
      booking: "Completed",
      createDate: "12 May,2024 12:23 AM",
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    searchParams.delete("queryTitles");
    setSearchParams(searchParams, { replace: true });
    navigate(
      `${record.id}?queryTitles=Work Order Resource Details,${record.resource}`
    );
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle="ACITVE_WORK_ORDER_RESOURCES"
      columns={columns}
      dataSource={data}
      tableFilters={["search", "filterBy"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AllWorkOrderResourcesOrganism;
