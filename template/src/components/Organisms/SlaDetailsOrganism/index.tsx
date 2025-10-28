import { useForm } from "react-hook-form";
import DetailsScreenOrganism from "../DetailsScreenOrganism";
import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import styles from "./styles.module.scss";
import { ISlaDetails, slaDetailsSchema } from "./types";
import { STATUS_ID } from "@/constants/Status";

function SlaDetailsOrganism() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ISlaDetails>({
    defaultValues: {
      slaName: "Fix Air-3",
      applicableFrom: "12 May,2025",
      applicableWhen: "12 May,2025",
      warnAfter: "12 May,2025",
    },
  });

  const detailsScreenCells: DetailsScreenCells<ISlaDetails> = {
    slaName: {
      label: "SLA_NAME",
      isEditable: true,
    },
    applicableFrom: {
      label: "APPLICABLE_FROM",
      isEditable: true,
      className: styles.largeCellStyle,
      inputType: "date",
    },
    applicableWhen: {
      label: "APPLICABLE_WHEN",
      isEditable: true,
      className: styles.largeCellStyle,
      inputType: "date",
    },
    warnAfter: {
      label: "WARN_AFTER",
      isEditable: true,
      className: styles.largeCellStyle,
      inputType: "date",
    },
  };

  const detailsScreenSections: DetailsScreenSection<ISlaDetails>[] = [
    {
      rows: [
        {
          className: styles.customRowStyle,
          cells: ["slaName", "applicableFrom", "applicableWhen", "warnAfter"],
        },
      ],
    },
  ];
  return (
    <DetailsScreenOrganism
      title="OVERVIEW"
      className={styles.detailsScreen}
      initialData={getValues()}
      cells={detailsScreenCells}
      sections={detailsScreenSections}
      statusId={STATUS_ID.COMPLETED}
      editable
      deletable
      control={control}
      handleSubmit={handleSubmit}
      onEdit={(data) => console.error(data)}
      errors={errors}
      validationRules={slaDetailsSchema}
    />
  );
}

export default SlaDetailsOrganism;
