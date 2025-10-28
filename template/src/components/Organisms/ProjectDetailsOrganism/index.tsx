import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import StatusMolecule from "../../Molecules/StatusMolecule";
import { useForm } from "react-hook-form";
import { IProjectDetails, projectDetailsSchema } from "./types";
import styles from "./styles.module.scss";
import { STATUS_ID, STATUS_TEXT } from "@/constants/Status";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import DetailsScreenOrganism from "../DetailsScreenOrganism";

function ProjectDetailsOrganism() {
  const { t } = useAutoCompleteTranslation();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IProjectDetails>({
    defaultValues: {
      projectId: 1,
      account: "Adidas Sporting Goods LTD.",
      projectNumber: "PJ_02_009_044",
      projectName: "Adidas FO - EG, Mansoura",
      statusId: STATUS_ID.IN_PROGRESS,
    },
  });

  const detailsScreenCells: DetailsScreenCells<IProjectDetails> = {
    account: {
      label: "ACCOUNT",
      isEditable: true,
      className: styles.largeCellStyle,
    },
    projectNumber: {
      label: "PROJECT_NUMBER",
      isEditable: true,
    },
    projectName: {
      label: "NAME",
      isEditable: true,
      className: styles.largeCellStyle,
    },
    statusId: {
      label: "status",
      isEditable: true,
      inputType: "select",
      options: [
        {
          value: STATUS_ID.IN_PROGRESS,
          label: t(STATUS_TEXT[STATUS_ID.IN_PROGRESS]),
        },
        {
          value: STATUS_ID.COMPLETED,
          label: t(STATUS_TEXT[STATUS_ID.COMPLETED]),
        },
        { value: STATUS_ID.ON_HOLD, label: t(STATUS_TEXT[STATUS_ID.ON_HOLD]) },
      ],
      renderViewComponent: (statusId) => {
        return <StatusMolecule indicator statusId={statusId} />;
      },
    },
  };

  const detailsScreenSections: DetailsScreenSection<IProjectDetails>[] = [
    {
      rows: [
        {
          className: styles.customRowStyle,
          cells: ["account", "projectNumber", "projectName", "statusId"],
        },
      ],
    },
  ];

  return (
    <DetailsScreenOrganism
      title="PROJECT_DETAILS"
      initialData={getValues()}
      cells={detailsScreenCells}
      sections={detailsScreenSections}
      editable
      deletable
      control={control}
      handleSubmit={handleSubmit}
      onEdit={(data) => console.error(data)}
      errors={errors}
      validationRules={projectDetailsSchema}
    />
  );
}

export default ProjectDetailsOrganism;
