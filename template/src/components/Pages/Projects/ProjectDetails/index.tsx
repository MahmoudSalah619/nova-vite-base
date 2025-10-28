import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import PageHeader from "@components/Molecules/PageHeader";
import Text from "@components/Atoms/Text";
import ProjectDetailsOrganism from "@components/Organisms/ProjectDetailsOrganism";

function ProjectDetails() {
  const [searchParams] = useSearchParams();

  return (
    <main className={styles.container}>
      <PageHeader
        title={searchParams.get("queryTitles") ?? ""}
        canGoBack
        subtitleContent={<Text variant="P7" i18nText="PROJECT" />}
      />
      <ProjectDetailsOrganism />
    </main>
  );
}

export default ProjectDetails;
