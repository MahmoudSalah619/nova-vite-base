import { useSearchParams } from "react-router-dom";
import Button from "../../../Atoms/Button";
import Text from "../../../Atoms/Text";
import PageHeader from "../../../Molecules/PageHeader";
import AllProjectsOrganism from "../../../Organisms/AllProjectsOrganism";
import styles from "./styles.module.scss";

function UserProjects() {
  const [searchParams] = useSearchParams();
  return (
    <main className={styles.pageContainer}>
      <PageHeader
        title={searchParams.get("queryTitles")?.split(",")?.[1] ?? ""}
        subtitleContent={
          <div className={styles.subtitleContainer}>
            <Text variant="L2">Assigned to : Abdelrahman Elafifey</Text>
          </div>
        }
      >
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <AllProjectsOrganism hasTitle={false} />
    </main>
  );
}

export default UserProjects;
