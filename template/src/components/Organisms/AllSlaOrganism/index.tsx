import { useNavigate, useSearchParams } from "react-router-dom";
import StatusMolecule from "../../Molecules/StatusMolecule";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import { STATUS_ID } from "@/constants/Status";

function AllSlaOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Work Order ID",
      dataIndex: "workOrderId",
      key: "order",
    },
    {
      title: "Project Number",
      dataIndex: "projectNumber",
      key: "projectNumber",
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
      // TODO: Remove the Number constructor when the type is fixed
      render: (statusID) => (
        <StatusMolecule indicator statusId={Number(statusID)} />
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

  // @ts-ignore
  // TODO: should be change the type for dataSource and make the type dynamic based on the columns
  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      workOrderId: `#1636884473`,
      projectNumber: `63gekgrii23u${i + 1}`,
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
    navigate(`/sla/${record.id}?queryTitles=SLA Details`);
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle="SLA_LIST"
      columns={columns}
      dataSource={data}
      tableFilters={["search", "sla"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AllSlaOrganism;
