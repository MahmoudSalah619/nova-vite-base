import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import UserAvatarAtom from "../../Atoms/UserAvatarAtom";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";

function MyProfileOrganism() {
  return (
    <CardWrapper className={styles.myProfileCard}>
      <div className={styles.header}>
        <Text variant="P1" i18nText="MY_PROFILE" />
        <Button variant="secondary" prefixIcon="editIcon" title="EDIT_IMAGE" />
      </div>

      <div className={styles.userInfoContainer}>
        <UserAvatarAtom
          user="Mina Ayman Maher"
          fontVariant="H5"
          className={styles.avatar}
        />

        <div className={styles.userInfo}>
          <Text variant="P1" color="primary400">
            Mina Ayman Maher
          </Text>
          <Text variant="P5">Technical engineer at Bit68 Company</Text>
          <Text variant="P4" i18nText="USER" />
        </div>
      </div>
    </CardWrapper>
  );
}

export default MyProfileOrganism;
