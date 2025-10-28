import PageHeader from "@components/Molecules/PageHeader";
import styles from "./styles.module.scss";
import Button from "@components/Atoms/Button";
import AllProjectsOrganism from "@components/Organisms/AllProjectsOrganism";

function Projects() {
  return (
    <main className={styles.pageContainer}>
      <PageHeader className={styles.pageHeaderContainer}>
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <AllProjectsOrganism />
    </main>
  );
}

export default Projects;
