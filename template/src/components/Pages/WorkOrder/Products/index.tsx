import PageHeader from "@components/Molecules/PageHeader";
import styles from "./styles.module.scss";
import Button from "@components/Atoms/Button";
import AllWorkOrderProductsOrganism from "@components/Organisms/AllWorkOrderProductsOrganism";

function WorkOrderPorducts() {
  return (
    <main className={styles.pageContainer}>
      <PageHeader i18nTitle="WORK_ORDER_PRODUCTS">
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <AllWorkOrderProductsOrganism />
    </main>
  );
}

export default WorkOrderPorducts;
