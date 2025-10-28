import Button from "../../Atoms/Button";
import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import IEmptyMoleculeProps from "./types";
import styles from "./styles.module.scss";
import CardWrapper from "../../Wrappers/CardWrapper";

function EmptyWorkOrderMolecule({ buttonProps, title }: IEmptyMoleculeProps) {
  return (
    <CardWrapper className={styles.emptyContainer}>
      <Icon name="emptyList" width={243.9} height={224.1} />

      <div className={styles.emptyTextContainer}>
        <Text variant="H6" color="text200" i18nText={title} />
        <Button {...buttonProps} />
      </div>
    </CardWrapper>
  );
}

export default EmptyWorkOrderMolecule;
