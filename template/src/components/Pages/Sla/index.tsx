import PageHeader from "@components/Molecules/PageHeader";
import styles from "./styles.module.scss";
import Button from "@components/Atoms/Button";
import AllSlaOrganism from "@components/Organisms/AllSlaOrganism";

function Sla() {
  return (
    <main className={styles.pageContainer}>
      <PageHeader className={styles.pageHeaderContainer}>
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <AllSlaOrganism />
    </main>
  );
}

export default Sla;
