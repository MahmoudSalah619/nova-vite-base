import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import PageHeader from "@components/Molecules/PageHeader";
import WorkOrderProductDetailsOrganism from "@components/Organisms/WorkOrderProductDetailsOrganism";

function WorkOrderProductDetails() {
  const [searchParams] = useSearchParams();

  return (
    <main className={styles.container}>
      <PageHeader title={searchParams.get("queryTitles") ?? ""} canGoBack />
      <WorkOrderProductDetailsOrganism />
    </main>
  );
}

export default WorkOrderProductDetails;
