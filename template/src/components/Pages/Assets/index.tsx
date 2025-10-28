import PageHeader from "../../Molecules/PageHeader";
import styles from "./styles.module.scss";
import AssetsTabelOrganism from "../../Organisms/AssetsTabelOrganism";

export default function Assets() {
  return (
    <main className={styles.pageContainer}>
      <PageHeader i18nTitle="ASSETS" />

      <AssetsTabelOrganism />
    </main>
  );
}
