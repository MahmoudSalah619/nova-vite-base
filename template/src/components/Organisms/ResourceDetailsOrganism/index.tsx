import DetailsScreenOrganism from "../DetailsScreenOrganism";
import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import StatusMolecule from "../../Molecules/StatusMolecule";
import { useForm } from "react-hook-form";
import { IResourceDetails, resourceDetailsSchema } from "./types";
import styles from "./styles.module.scss";
import { STATUS_ID } from "@/constants/Status";
import { STATUS_OPTIONS } from "@/constants/OPTIONS";

function ResourceDetailsOrganism() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IResourceDetails>({
    defaultValues: {
      resourceId: "#1636884473",
      resourceName: "Mina Ayman Maher",
      trade: "Bit68",
      availability: STATUS_ID.IN_PROGRESS,
      status: STATUS_ID.COMPLETED,
    },
  });

  const detailsScreenCells: DetailsScreenCells<IResourceDetails> = {
    resourceId: {
      label: "RESOURCE_ID",
      isEditable: true,
    },
    resourceName: {
      label: "RESOURCE_NAME",
      isEditable: true,
    },
    trade: {
      label: "TRADE",
      isEditable: true,
    },
    availability: {
      label: "AVAILABILITY",
      isEditable: true,
      inputType: "select",
      options: STATUS_OPTIONS,
      renderViewComponent: (statusId) => {
        return <StatusMolecule indicator statusId={statusId} />;
      },
    },
    status: {
      label: "status",
      isEditable: true,
      inputType: "select",
      options: STATUS_OPTIONS,
      renderViewComponent: (statusId) => {
        return <StatusMolecule indicator statusId={statusId} />;
      },
    },
  };

  const detailsScreenSections: DetailsScreenSection<IResourceDetails>[] = [
    {
      title: "RESOURCE_DETAILS",
      rows: [
        {
          className: styles.customRowStyle,
          cells: [
            "resourceId",
            "resourceName",
            "trade",
            "availability",
            "status",
          ],
        },
      ],
    },
  ];
  return (
    <DetailsScreenOrganism
      title="General"
      initialData={getValues()}
      cells={detailsScreenCells}
      sections={detailsScreenSections}
      editable
      deletable
      deletableInEditMode
      control={control}
      handleSubmit={handleSubmit}
      onEdit={(data) => console.error(data)}
      errors={errors}
      validationRules={resourceDetailsSchema}
    />
  );
}

export default ResourceDetailsOrganism;
