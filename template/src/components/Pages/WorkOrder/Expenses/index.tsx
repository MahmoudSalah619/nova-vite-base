import PageHeader from "@components/Molecules/PageHeader";
import styles from "./styles.module.scss";
import Button from "@components/Atoms/Button";
import AllWorkOrderExpensesOrganism from "@components/Organisms/AllWorkOrderExpensesOrganism";

function WorkOrderExpenses() {
  return (
    <main className={styles.pageContainer}>
      <PageHeader i18nTitle="ALL_WORK_ORDER_EXPENSES">
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <AllWorkOrderExpensesOrganism />
    </main>
  );
}

export default WorkOrderExpenses;
