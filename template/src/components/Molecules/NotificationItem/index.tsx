import styles from "./styles.module.scss";
import { NotificationItemProps } from "./types";
import StatusMolecule from "../StatusMolecule";
import Text from "../../Atoms/Text";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import UserAvatarAtom from "../../Atoms/UserAvatarAtom";

function NotificationItem({
  statusId,
  statusText,
  title,
  location,
  floor,
  users,
  isRead = false,
}: NotificationItemProps) {
  const { t } = useAutoCompleteTranslation();

  return (
    <div className={styles.notificationItem}>
      <div className={styles.content}>
        <StatusMolecule statusId={statusId} statusText={statusText} />

        <Text variant="H7" color="text50">
          {title}
        </Text>

        <div className={styles.locationContainer}>
          <Text variant="P3" color="text100">
            {t("LOCACTION")}: {location}
          </Text>
          <Text variant="P3" color="text100">
            {t("FLOOR")}: {floor}
          </Text>
        </div>

        <div className={styles.usersAvatarsContainer}>
          <Text variant="P3" color="text100">
            {t("Users")}:{" "}
          </Text>
          <div className={styles.usersAvatars}>
            {users.map((user) => (
              <UserAvatarAtom user={user} />
            ))}
          </div>
        </div>
      </div>

      {isRead && <span className={styles.notificationDot} />}
    </div>
  );
}

export default NotificationItem;
