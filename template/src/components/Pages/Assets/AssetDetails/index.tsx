import { useSearchParams } from "react-router-dom";
import Text from "../../../Atoms/Text";
import PageHeader from "../../../Molecules/PageHeader";
import styles from "./styles.module.scss";
import AssetDetailsOrganism from "../../../Organisms/AssetDetailsOrganism";
import AssetHistoryOrgaism from "../../../Organisms/AssetHistoryOrgaism";

function AssetDetails() {
  const [searchParams] = useSearchParams();

  return (
    <main className={styles.container}>
      <PageHeader
        title={searchParams.get("queryTitles")?.split(",")?.[0] || undefined}
        canGoBack
        subtitleContent={<Text variant="P7" i18nText="ASSETS" />}
      />
      <AssetDetailsOrganism />
      <AssetHistoryOrgaism />
    </main>
  );
}

export default AssetDetails;
