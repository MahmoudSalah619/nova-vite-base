import PageHeader from "@/src/components/Molecules/PageHeader";
import ProductName from "@/src/components/Molecules/ProductName";
import StaticticsCardsContent from "../../StaticticsCardsContent";
import MainTableOrganism from "../../MainTableOrganism";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import Button from "@/src/components/Atoms/Button";
import { useNavigate } from "react-router-dom";
import TableFilterMolecule from "@/src/components/Molecules/TableFilterMolecule";
import HomeChartsOrganism from "../../HomeChartsOrganism";
import styles from "../styles.module.scss";

function SellerHomeView() {
  const navigate = useNavigate();

  const columns = [
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text: string) => <ProductName text={text} />,
    },
    {
      title: "Total Work Order",
      dataIndex: "totalWorkOrder",
      key: "order",
    },
    {
      title: "Work Order Type",
      dataIndex: "workOrderType",
      key: "type",
    },
    {
      title: "Problem Type",
      dataIndex: "problemType",
      key: "problemType",
    },
  ];

  const data = Array.from({ length: 101 }, (_, i) => ({
    key: (i + 1).toString(),
    projectName: `Project #${i + 1}`,
    totalWorkOrder: (i + 9).toString(),
    workOrderType: "Organizer",
    problemType: "fix AC",
    price: "1234",
    orders: "1234",
    stock: "1234",

    revenue: "EGP 123,456",
  }));

  const Statictics = [
    {
      id: "1",
      label: "TOTAL_WORK_ORDERS" as TranslationKeyEnum,
      value: "1377",
    },
    {
      id: "2",
      label: "TOTAL_CM_WORK_ORDERS" as TranslationKeyEnum,
      value: "35",
    },
    {
      id: "3",
      label: "TOTAL_PM_WORK_ORDERS" as TranslationKeyEnum,
      value: "1339",
    },
    {
      id: "2",
      label: "TOTAL_CONSUMED_HOURS" as TranslationKeyEnum,
      value: "38",
    },
  ];
  return (
    <>
      <PageHeader i18nTitle="DASHBOARD">
        <Button
          variant="secondary"
          prefixIcon="addBlack"
          title="ADD_NEW_WORK_ORDER"
          onClick={() => {
            navigate("/add-new-work-order");
          }}
        />
        <Button
          title="REQUEST_ADD_NEW_USER"
          prefixIcon="add"
          onClick={() => {
            navigate("/request-add-new-user");
          }}
        />
      </PageHeader>

      <TableFilterMolecule
        className={styles.filtersContainer}
        filters={[
          "year",
          "month",
          "sla",
          "status",
          "subStatus",
          "work_order_type",
          "project",
        ]}
      />

      <StaticticsCardsContent Statictics={Statictics} />

      <HomeChartsOrganism />

      <MainTableOrganism
        showHeader
        headerTitle="TOTAL_WORKERS_TODAY"
        columns={columns}
        dataSource={data}
        tableFilters={["search", "work_order_type", "date", "status"]}
      />
    </>
  );
}
export default SellerHomeView;
