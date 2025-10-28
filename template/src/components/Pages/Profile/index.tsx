import PageHeader from "../../Molecules/PageHeader";
import MyProfileOrganism from "../../Organisms/MyProfileOrganism";
import ProfileInformationOrganism from "../../Organisms/ProfileInformationOrganism";
import PageWrapper from "../../Wrappers/PageWrapper";
import styles from "./styles.module.scss";

function Profile() {
  return (
    <PageWrapper className={styles.profilePage}>
      <PageHeader i18nTitle="ACCOUNT_SETTINGS" />

      <div className={styles.profileContent}>
        <MyProfileOrganism />
        <ProfileInformationOrganism />
      </div>
    </PageWrapper>
  );
}

export default Profile;
