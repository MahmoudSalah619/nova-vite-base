import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import MainTableOrganism from "@/src/components/Organisms/MainTableOrganism";
import PageHeader from "../../Molecules/PageHeader";
import Button from "../../Atoms/Button";
import TableSelectionOptions from "@/constants/TableSelectionOptions";
import { MainTableOrganismProps } from "../MainTableOrganism/types";
import TabsMolecule from "../../Molecules/TabsMolecule";
import ITabsMoleculeProps from "../../Molecules/TabsMolecule/types";
import { Input } from "@components/Molecules/Input";

function WorkOrderOrganism() {
  const navigate = useNavigate();

  const columns: MainTableOrganismProps["columns"] = [
    {
      title: "Work Order ID",
      dataIndex: "workOrderID",
      key: "workOrderID",
    },
    {
      title: "Date To Perform",
      dataIndex: "dateToPerform",
      key: "dateToPerform",
    },
    {
      title: "System Status",
      dataIndex: "systemStatus",
      key: "systemStatus",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Incident Type",
      dataIndex: "incidentType",
      key: "incidentType",
    },
    {
      title: "Sub Status",
      dataIndex: "subStatus",
      key: "subStatus",
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Work Owner",
      dataIndex: "workOwner",
      key: "workOwner",
    },
  ];

  const openWorkOrders = Array.from({ length: 21 }, (_, i) => ({
    key: (i + 1).toString(),
    workOrderID: "#1636884475",
    dateToPerform: "10 May, 2024",
    systemStatus: "Project #3",
    priority: "Project #1",
    incidentType: "resolved",
    subStatus: "#1636884475",
    group: "Downtown Mall",
    workOwner: "CM",
  }));

  const completedWorkOrders = Array.from({ length: 21 }, (_, i) => ({
    key: (i + 1).toString(),
    workOrderID: "#1636884473",
    dateToPerform: "12 May, 2024",
    systemStatus: "Project #1",
    priority: "Project #1",
    incidentType: "sync",
    subStatus: "#1636884473",
    group: "Masr Mall",
    workOwner: "CM",
  }));

  const tabPanes: ITabsMoleculeProps["tabPanes"] = [
    {
      tabKey: "open",
      tab: "Open Work Orders",
      children: (
        <MainTableOrganism
          headerTitle="TOTAL_WORK_ORDERS"
          showHeader
          columns={columns}
          dataSource={openWorkOrders}
          tableFilters={["search", "work_order_type", "sla"]}
        />
      ),
    },
    {
      tabKey: "completed",
      tab: "Completed Work Orders",
      children: (
        <MainTableOrganism
          headerTitle="TOTAL_WORK_ORDERS"
          showHeader
          columns={columns}
          dataSource={completedWorkOrders}
          tableFilters={["search", "work_order_type", "sla"]}
        />
      ),
    },
  ];

  return (
    <section className={styles.container}>
      <PageHeader i18nTitle="WORK_ORDERS">
        <Button
          title="ADD_NEW_WORK_ORDER"
          onClick={() => navigate("/add-new-work-order")}
        />
      </PageHeader>

      <div className={styles.filterContainer}>
        <Input
          type="dropdown"
          i18nLabel="SELECT_MAIN_PROJECT"
          options={TableSelectionOptions.DummyData}
          placeholder="All"
        />
        <Button variant="primary" title="EXPORT" onClick={() => {}} />
      </div>

      <TabsMolecule paramName="tab" tabPanes={tabPanes} />
    </section>
  );
}

export default WorkOrderOrganism;
