import { useNavigate, useSearchParams } from "react-router-dom";
import StatusMolecule from "../../Molecules/StatusMolecule";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import { STATUS_ID } from "@/constants/Status";

function AllProjectsOrganism({ hasTitle = true }: { hasTitle?: boolean }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Work Order ID",
      dataIndex: "workOrderId",
      key: "order",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "SLA Status",
      dataIndex: "slaStatus",
      key: "slaStatus",
      // TODO: should be remove the number constructor when type is fixed
      render: (statusId) => (
        <StatusMolecule indicator statusId={Number(statusId)} />
      ),
    },
    {
      title: "Applicable From Value",
      dataIndex: "applicableFromValue",
      key: "applicableFromValue",
    },
    {
      title: "Warning Time",
      dataIndex: "warningTime",
      key: "warningTime",
    },
    {
      title: "Failure Time",
      dataIndex: "failureTime",
      key: "failureTime",
    },
  ];

  // TODO: data source should be dynamic typed
  // @ts-ignore
  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      workOrderId: `#1636884473`,
      priority: "P3",
      slaStatus: STATUS_ID.IN_PROGRESS,
      applicableFromValue: "12 May,2024 12:23 AM",
      warningTime: "12 May,2024 12:23 AM",
      failureTime: "12 May,2024 12:23 AM",
      projectName: "Addidas FO - EG, Mansoura",
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    searchParams.delete("queryTitles");
    setSearchParams(searchParams, { replace: true });
    navigate(`/projects/${record.id}?queryTitles=${record.projectName}`);
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle={hasTitle ? "ALL_PROJECTS" : undefined}
      columns={columns}
      dataSource={data}
      tableFilters={["search", "projects", "status"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AllProjectsOrganism;
