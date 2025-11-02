import { STATUS_ID } from "@/constants/Status";
import Text from "../../Atoms/Text";
import UserAvatarAtom from "../../Atoms/UserAvatarAtom";
import NavbarLink from "../../Molecules/NavbarLink";
import NavbarNotification from "../../Molecules/NavbarNotification";
import StatusMolecule from "../../Molecules/StatusMolecule";
import styles from "./styles.module.scss";

function NavbarOrganism() {
  return (
    <nav className={styles.navbar}>
      <NavbarLink />
      <div className={styles.navbarRight}>
        <div className={styles.userInfoContainer}>
          <div className={styles.userInfo}>
            <Text variant="P4" color="text400">
              16, May 2024,
            </Text>
            <Text variant="P9">mahmoud salah</Text>
          </div>
          <div className={styles.statusContainer}>
            <StatusMolecule
              statusId={STATUS_ID.IN_PROGRESS}
              statusText="Admin"
            />
          </div>
        </div>
        <UserAvatarAtom user="mahmoud salah" href="/my-profile" />
        <span className={styles.divider} />
        <NavbarNotification />
      </div>
    </nav>
  );
}

export default NavbarOrganism;
