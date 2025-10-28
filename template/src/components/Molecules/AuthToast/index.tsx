import Icon from "@components/Atoms/Icon";
import styles from "./styles.module.scss";
import Text from "@components/Atoms/Text";
import IAuthToastProps from "./types";

export default function AuthToast({ title, message }: IAuthToastProps) {
  return (
    <div className={styles.toastContainer}>
      <Icon name="error" />
      <div className={styles.toastBody}>
        <Text variant="P6" color="text50">
          {title}
        </Text>
        <Text variant="P3" color="text100">
          {message}
        </Text>
      </div>
    </div>
  );
}
