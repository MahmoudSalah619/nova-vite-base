import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import ProjectCard from "../../Molecules/ProjectCard";
import ModalOrganism from "../ModalOrganism";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input } from "@components/Molecules/Input";

const data = [
  {
    id: 1,
    title: "Project #1",
    bodyText: "5 Work Orders",
  },
  {
    id: 2,
    title: "Project #2",
    bodyText: "8 Work Orders",
  },
  {
    id: 3,
    title: "Project #3",
    bodyText: "3 Work Orders",
  },
  {
    id: 4,
    title: "Project #4",
    bodyText: "1 Work Orders",
  },
];

const ProjectOptions = [
  {
    id: 1,
    value: "1",
    label: "Project #1",
  },
  {
    id: 2,
    value: "2",
    label: "Project #2",
  },
  {
    id: 3,
    value: "3",
    label: "Project #3",
  },
  {
    id: 4,
    value: "4",
    label: "Project #4",
  },
];

export default function AssignedProjects() {
  const { t } = useAutoCompleteTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const handleCancelModal = () => {
    setIsVisible(false);
  };

  const handleAssignProject = () => {
    setIsVisible(false);
  };

  const projectCardsOnClick = (id: number, name: string) => {
    const queryTitles = searchParams.get("queryTitles")?.split(",") || [];
    queryTitles.push(name);
    searchParams.set("queryTitles", queryTitles.join(","));
    setSearchParams(searchParams);
    navigate(`projects/${id}?${searchParams.toString()}`);
  };

  return (
    <CardWrapper className={styles.cardWrapper}>
      <div className={styles.cardHeader}>
        <Text i18nText="ASSIGNED_PROJECTS" variant="P1" />
        <Button
          className={styles.assignProjectBtn}
          title="ASSIGN_PROJECT"
          variant="secondary"
          prefixIcon="addBlack"
          iconSize={9.33}
          onClick={() => setIsVisible(true)}
        />
      </div>
      <div className={styles.cardBody}>
        <Text variant="H7">{`${t("TOTAL_WORK_ORDERS")}: 16`}</Text>
        <div className={styles.projectCardsContainer}>
          {data.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              bodyText={item.bodyText}
              onClick={() => projectCardsOnClick(item.id, item.title)}
            />
          ))}
        </div>
      </div>

      <ModalOrganism
        title={t("ASSIGN_PROJECT")}
        isVisible={isVisible}
        onCancel={handleCancelModal}
      >
        <div className={styles.modalContent}>
          <Input
            type="dropdown"
            prefixIcon="searchNormal"
            prefixIconSize={15}
            fullWidth
            size="large"
            i18nPlaceholder="SELECT_PROJECT"
            i18nLabel="PROJECT_NAME"
            showSearch
            options={ProjectOptions}
          />
          <div className={styles.modalbuttons}>
            <Button
              title="ASSIGN_PROJECT"
              variant="primary"
              onClick={handleAssignProject}
            />
          </div>
        </div>
      </ModalOrganism>
    </CardWrapper>
  );
}
