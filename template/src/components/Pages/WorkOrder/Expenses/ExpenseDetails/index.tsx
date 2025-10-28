import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import PageHeader from "@components/Molecules/PageHeader";
import Text from "@components/Atoms/Text";
import WorkOrderExpenseDetailsOrganism from "@components/Organisms/WorkOrderExpenseDetailsOrganism";

function WorkOrderExpenseDetails() {
  const [searchParams] = useSearchParams();

  return (
    <main className={styles.container}>
      <PageHeader
        title={searchParams.get("queryTitles")?.split(",")?.[1] ?? ""}
        canGoBack
        subtitleContent={<Text variant="P7" i18nText="BOOKABLE_RESOURCE" />}
      />
      <WorkOrderExpenseDetailsOrganism />
    </main>
  );
}

export default WorkOrderExpenseDetails;
