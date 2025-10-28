import { useNavigate, useSearchParams } from "react-router-dom";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import StatusMolecule from "../../Molecules/StatusMolecule";
import { STATUS_ID } from "@/constants/Status";

function ResourcesTabelOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Resource ID",
      dataIndex: "resourceId",
      key: "resourceId",
    },
    {
      title: "Resource Name",
      dataIndex: "resourceName",
      key: "resourceName",
    },
    {
      title: "Trade",
      dataIndex: "trade",
      key: "trade",
    },
    {
      title: "Availability",
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
      resourceId: "#1636884473",
      resourceName: "Mina Ayman Maher",
      trade: "Bit68",
      availability: STATUS_ID.IN_PROGRESS,
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    const queryTitles = searchParams.get("queryTitles")?.split(",") || [];
    queryTitles.push(record.resourceName);
    searchParams.set("queryTitles", queryTitles.join(","));
    setSearchParams(searchParams);
    navigate(`${record.id}?${searchParams.toString()}`);
  };

  return (
    <MainTableOrganism
      headerTitle="TOTAL_RESOURCES"
      showHeader
      columns={columns}
      dataSource={data}
      tableFilters={["search", "status"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default ResourcesTabelOrganism;
