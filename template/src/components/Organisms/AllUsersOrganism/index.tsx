import { useNavigate, useSearchParams } from "react-router-dom";
import StatusMolecule from "../../Molecules/StatusMolecule";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import { STATUS_ID } from "@/constants/Status";

function AllUsersOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "order",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      // TODO: should be remove number constructor after type is fixed
      render: (statusId) => (
        <StatusMolecule indicator statusId={Number(statusId)} />
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  // TODO: should data source dynamic typed
  // @ts-ignore
  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      fullName: "Mina Ayman Maher",
      code: "ADCD-123",
      title: "CAFM Coordinator",
      status: STATUS_ID.IN_PROGRESS,
      phoneNumber: "01288153092",
      email: "Minaayman@gmail.com",
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    const queryTitles = searchParams.get("queryTitles")?.split(",") || [];
    queryTitles.push(record.fullName);
    searchParams.set("queryTitles", queryTitles.join(","));
    setSearchParams(searchParams);
    navigate(`${record.id}?${searchParams.toString()}`);
  };

  return (
    <MainTableOrganism
      showHeader
      headerTitle="ALL_USERS"
      columns={columns}
      dataSource={data}
      tableFilters={["search", "projects", "status"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AllUsersOrganism;
