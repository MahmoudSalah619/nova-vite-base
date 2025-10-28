import { useNavigate, useSearchParams } from "react-router-dom";
import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";

function AssetsTabelOrganism() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Asset Code",
      dataIndex: "assetCode",
      key: "assetCode",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
  ];

  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      id: (i + 1).toString(),
      assetCode: "ADCD-123",
      location: "Tech-CD-2",
    })
  );

  const rowOnClick = (record: MainTableOrganismProps["dataSource"][number]) => {
    const queryTitles = searchParams.get("queryTitles")?.split(",") || [];
    queryTitles.push(record.assetCode);
    searchParams.set("queryTitles", queryTitles.join(","));
    setSearchParams(searchParams);
    navigate(`${record.id}?${searchParams.toString()}`);
  };

  return (
    <MainTableOrganism
      showHeader
      columns={columns}
      dataSource={data}
      tableFilters={["search"]}
      rowOnClick={rowOnClick}
    />
  );
}

export default AssetsTabelOrganism;
