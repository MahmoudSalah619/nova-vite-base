import Button from "../../Atoms/Button";
import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

export default function NoAssetsFoundMolecule() {
  return (
    <div className={styles.container}>
      <Icon name="searchFile" size={142} />
      <Text variant="H5" i18nText="NO_ASSET_HISTORY" />
      <Text variant="P3" i18nText="NO_ASSET_HISTORY_DESC" />
      <Button title="ASSIGN_TASK" size="small" prefixIcon="add" />
    </div>
  );
}
