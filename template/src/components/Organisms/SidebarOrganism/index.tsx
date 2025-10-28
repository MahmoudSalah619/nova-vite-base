import styles from "./styles.module.scss";
import SidebarLink from "../../Molecules/SidebarLink";
import useGetUserInfo from "@/hooks/useGetUserInfo";
import { generalLinks, supportLinks } from "./links";
import Button from "../../Atoms/Button";
import ModalOrganism from "../ModalOrganism";
import { useState } from "react";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import logoutHandler from "@/utils/logoutHandler";
import Logo from "@components/Atoms/Logo";

function SidebarOrganism() {
  const { role } = useGetUserInfo();
  const { t } = useAutoCompleteTranslation();

  const [isVisible, setIsVisible] = useState(false);

  const mainLinks = generalLinks[role];
  const lowerLinks = supportLinks[role];

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.upperContainer}>
        <Logo className={styles.logo} />
        <div className={styles.sidebarLinksContainer}>
          <div className={styles.sidebarLinks}>
            {mainLinks.map((link) => (
              <SidebarLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.lowerContainer}>
        <div className={styles.triangleStyle}>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="0,0 100,0 16,36.6" fill="#0e3e52" />
          </svg>
        </div>
        <div className={styles.lowerLinks}>
          {lowerLinks?.map((link) => <SidebarLink key={link.href} {...link} />)}
          <Button
            className={styles.logoutBtn}
            prefixIcon="siderLogout"
            variant="noStyle"
            prefixIconSize={20}
            fontColor="primary700"
            title="LOGOUT"
            fontVariant="P8"
            onClick={() => setIsVisible(true)}
          />
        </div>
      </div>

      <ModalOrganism
        isVisible={isVisible}
        onCancel={handleCancel}
        title={t("LOGOUT_ACCOUNT")}
        prefix={
          <div className={styles.modalIconContainer}>
            <Icon name="error" />
          </div>
        }
      >
        <Text
          variant="P3"
          color="text100"
          i18nText="ARE_YOU_SURE_YOU_WANT_TO_LOGOUT"
        />

        <div className={styles.modalBtnContainer}>
          <Button variant="secondary" title="CANCEL" onClick={handleCancel} />
          <Button variant="primary" title="Confirm" onClick={logoutHandler} />
        </div>
      </ModalOrganism>
    </aside>
  );
}

export default SidebarOrganism;
