import PageHeader from "../../Molecules/PageHeader";
import AddNewUserOrganism from "../../Organisms/AddNewUserOrganism";
import styles from "./styles.module.scss";

export default function RequestAddNewUser() {
  return (
    <main className={styles.container}>
      <PageHeader i18nTitle="REQUEST_ADD_NEW_USER" canGoBack />

      <AddNewUserOrganism />
    </main>
  );
}
