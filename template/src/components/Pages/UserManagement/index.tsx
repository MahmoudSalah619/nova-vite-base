import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button";
import PageHeader from "../../Molecules/PageHeader";
import styles from "./styles.module.scss";
import AllUsersOrganism from "../../Organisms/AllUsersOrganism";

export default function UserManagement() {
  const navigate = useNavigate();
  return (
    <main className={styles.pageContainer}>
      <PageHeader className={styles.pageHeaderContainer}>
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
        <Button
          variant="primary"
          prefixIcon="add"
          title="REQUEST_ADD_NEW_USER"
          onClick={() => {
            navigate("request-add-new-user");
          }}
        />
      </PageHeader>

      <AllUsersOrganism />
    </main>
  );
}
