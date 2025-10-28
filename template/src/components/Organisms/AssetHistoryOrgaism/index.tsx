import MainTableOrganism from "../MainTableOrganism";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import CardWrapper from "../../Wrappers/CardWrapper";
import NoAssetsFoundMolecule from "../../Molecules/NoAssetsFoundMolecule";

function AssetHistoryOrgaism() {
  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Asset Name",
      dataIndex: "assetName",
      key: "assetName",
    },
    {
      title: "Task Assigned",
      dataIndex: "taskAssigned",
      key: "taskAssigned",
    },
    {
      title: "Work Order ID",
      dataIndex: "workOrderId",
      key: "workOrderId",
    },
    {
      title: "Work Order Type",
      dataIndex: "workOrderType",
      key: "workOrderType",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  const data: MainTableOrganismProps["dataSource"] = Array.from(
    { length: 101 },
    (_, i) => ({
      key: (i + 1).toString(),
      assetName: `Asset ${i + 1}`,
      taskAssigned: `Task name #${i + 1}`,
      workOrderId: `#${i + 1}`,
      workOrderType: `Type ${i + 1}`,
      date: `12 May,2024  12:23 AM`,
    })
  );

  return (
    <CardWrapper>
      {data.length ? (
        <MainTableOrganism
          showHeader
          headerTitle="ASSET_HISTORY"
          columns={columns}
          dataSource={data}
        />
      ) : (
        <NoAssetsFoundMolecule />
      )}
    </CardWrapper>
  );
}

export default AssetHistoryOrgaism;
