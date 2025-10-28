import PageHeader from "@components/Molecules/PageHeader";
import styles from "./styles.module.scss";
import Button from "@components/Atoms/Button";
import AllWorkOrderResourcesOrganism from "@components/Organisms/AllWorkOrderResourcesOrganism";

function WorkOrderResources() {
  return (
    <main className={styles.pageContainer}>
      <PageHeader i18nTitle="ALL_WORK_ORDER_RESOURCES">
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <AllWorkOrderResourcesOrganism />
    </main>
  );
}

export default WorkOrderResources;
