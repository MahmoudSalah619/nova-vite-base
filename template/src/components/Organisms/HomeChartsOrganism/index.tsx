import WorkOrderByProblemBarChart from "../../Molecules/Charts/WorkOrderByProblemBarChart";
import WorkOrderPieChart from "../../Molecules/Charts/WorkOrderPieChart";
import WorkOrderTrendsLineChart from "../../Molecules/Charts/WorkOrderTrendsLineChart";
import styles from "./styles.module.scss";
import TableSelectionOptions from "@/constants/TableSelectionOptions";

export default function HomeChartsOrganism() {
  return (
    <div className={styles.container}>
      <div className={styles.rowContainer}>
        <WorkOrderTrendsLineChart
          data={TableSelectionOptions.WorkOrderTrendsData}
        />
        <WorkOrderByProblemBarChart
          data={TableSelectionOptions.WorkOrderByProblemData}
        />
        <WorkOrderPieChart
          data={TableSelectionOptions.ClientRequestIndicatorData}
          i18Title="CLIENT_REQUEST_INDICATOR"
        />
      </div>
      <div className={styles.rowContainer}>
        <WorkOrderPieChart
          data={TableSelectionOptions.CountOfPrimaryTradeData}
          i18Title="COUNT_OF_PRIMARY_TRADE"
        />
        <WorkOrderPieChart
          data={TableSelectionOptions.CorrectiveMaintenanceIndicatorData}
          i18Title="CORRECTIVE_MAINTENANCE_INDICATOR"
        />
        <WorkOrderPieChart
          data={TableSelectionOptions.PreventiveMaintenanceIndicatorData}
          i18Title="PREVENTIVE_MAINTENANCE_INDICATOR"
        />
      </div>
    </div>
  );
}
