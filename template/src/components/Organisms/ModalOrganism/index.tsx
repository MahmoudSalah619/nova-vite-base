import { Modal } from "antd";
import { ModalOrganismProps } from "./types";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import Icon from "../../Atoms/Icon";

export default function ModalOrganism({
  isVisible,
  children,
  title,
  prefix,
  onCancel,
}: ModalOrganismProps) {
  return (
    <Modal
      open={isVisible}
      onCancel={onCancel}
      closeIcon={false}
      footer={null}
      centered
      wrapClassName={styles.modalWrapper}
    >
      <div className={styles.headerContainer}>
        <div className={styles.title}>
          {!!prefix && prefix}
          <Text variant="H5" color="text50">
            {title}
          </Text>
        </div>

        <Icon name="homeSmallCloseIconModal" size={11} onClick={onCancel} />
      </div>

      {children}
    </Modal>
  );
}
