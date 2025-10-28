import { useSearchParams } from "react-router-dom";
import Text from "../../../Atoms/Text";
import PageHeader from "../../../Molecules/PageHeader";
import styles from "./styles.module.scss";
import ResourceDetailsOrganism from "../../../Organisms/ResourceDetailsOrganism";

function ResourceDetails() {
  const [searchParams] = useSearchParams();

  return (
    <main className={styles.container}>
      <PageHeader
        title={searchParams.get("queryTitles")?.split(",")?.[0] || undefined}
        canGoBack
        subtitleContent={<Text variant="P7" i18nText="BOOKABLE_RESOURCE" />}
      />
      <ResourceDetailsOrganism />
    </main>
  );
}

export default ResourceDetails;
