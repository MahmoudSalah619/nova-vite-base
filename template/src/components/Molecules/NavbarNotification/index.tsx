import { useState } from "react";
import { Popover } from "antd";
import styles from "./styles.module.scss";
import NotificationItem from "../NotificationItem";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import { NotificationItemProps } from "../NotificationItem/types";
import Icon from "../../Atoms/Icon";
import { STATUS_ID } from "@/constants/Status";

function NavbarNotification() {
  const notificationItems: NotificationItemProps[] = [
    {
      statusId: STATUS_ID.COMPLETED,
      statusText: "Success",
      title: "Created New Work Order #553545",
      location: "Masr Mall-AC4",
      floor: "4",
      users: ["John Doe", "Jane Smith"],
      isRead: true,
    },
    {
      statusId: STATUS_ID.DANGER,
      statusText: "CM work order",
      title: "Fix Air-condition at City center",
      location: "Masr Mall-AC4",
      floor: "4",
      users: ["John Doe", "Jane Smith", "Ali Ahmed", "Adel Shakal"],
      isRead: false,
    },
  ];

  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const handlePopoverVisibleChange = (visible: boolean) => {
    setIsPopoverVisible(visible);
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const notificationContent = (
    <div className={styles.notificationOverlay}>
      <div className={styles.notificationHeader}>
        <Text i18nText="Notifications" variant="P1" color="text50" />
        <Icon
          name="closeCircle"
          size={24}
          onClick={() => handlePopoverVisibleChange(false)}
        />
      </div>

      <div className={styles.notificationBody}>
        {notificationItems.length > 0 ? (
          <div className={styles.notificationList}>
            {notificationItems.map((item) => (
              <NotificationItem {...item} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyNotificationContent}>
            <Icon name="noNotification" width={94.11} height={112.49} />
            <div className={styles.noNotificationTexts}>
              <Text
                variant="H7"
                color="text50"
                i18nText="NO_NOTIFICATION_YET"
              />
              <Text
                variant="P3"
                color="text50"
                i18nText="EMPTY_NOTIFICATION_DESC"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.navbarNotificationContainer}>
      <div
        className={`${styles.hideOverlay} ${isPopoverVisible && styles.show}`}
      />

      <Popover
        content={notificationContent}
        placement="bottomRight"
        trigger="click"
        open={isPopoverVisible}
        onOpenChange={handlePopoverVisibleChange}
      >
        <Button variant="secondary" icon="notificationBing" iconSize={24} />
      </Popover>
    </div>
  );
}

export default NavbarNotification;
