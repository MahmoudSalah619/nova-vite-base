import Button from "@components/Atoms/Button";
import styles from "./styles.module.scss";
import PageHeader from "@components/Molecules/PageHeader";
import SlaDetailsOrganism from "@components/Organisms/SlaDetailsOrganism";
import SLAStatusOrganism from "@components/Organisms/SLAStatusOrganism";
import { STATUS_ID } from "@/constants/Status";

function SlaDetails() {
  return (
    <main className={styles.container}>
      <PageHeader i18nTitle="SLA_DETAILS" canGoBack>
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <SlaDetailsOrganism />

      <SLAStatusOrganism
        slaType="P1"
        statusId={STATUS_ID.COMPLETED}
        times={["2 hr", "4 hr", "8 hr"]}
      />
    </main>
  );
}

export default SlaDetails;
