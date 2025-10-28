import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import PageHeader from "@components/Molecules/PageHeader";
import WorkOrderResourceDetailsOrganism from "@components/Organisms/WorkOrderResourceDetailsOrganism";
import Text from "@components/Atoms/Text";

function WorkOrderResourceDetails() {
  const [searchParams] = useSearchParams();

  return (
    <main className={styles.container}>
      <PageHeader
        title={searchParams.get("queryTitles")?.split(",")?.[1] ?? ""}
        canGoBack
        subtitleContent={<Text variant="P7" i18nText="BOOKABLE_RESOURCE" />}
      />
      <WorkOrderResourceDetailsOrganism />
    </main>
  );
}

export default WorkOrderResourceDetails;
