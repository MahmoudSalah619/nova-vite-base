import { useNavigate } from "react-router-dom";
import StatusMolecule from "../../Molecules/StatusMolecule";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import { STATUS_ID } from "@/constants/Status";

function UserProjectsOrganism() {
  const navigate = useNavigate();

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
      render: (text) => (
        <StatusMolecule
          indicator
          statusId={STATUS_ID.IN_PROGRESS}
          statusText={text}
        />
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

  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      workOrderId: `#1636884473`,
      priority: "P3",
      slaStatus: "In Progress",
      applicableFromValue: "12 May,2024 12:23 AM",
      warningTime: "12 May,2024 12:23 AM",
      failureTime: "12 May,2024 12:23 AM",
      projectName: "Addidas FO - EG, Mansoura",
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    navigate(`${record.id}?queryTitles=${record.projectName}`);
  };

  return (
    <MainTableOrganism
      showHeader
      columns={columns}
      dataSource={data}
      tableFilters={["search", "projects", "status"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default UserProjectsOrganism;
