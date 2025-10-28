import { useForm } from "react-hook-form";
import DetailsScreenOrganism from "../DetailsScreenOrganism";
import { detailsScreenCells, detailsScreenSections } from "./static";
import {
  IWorkOrderResourceDetails,
  workOrderResourceDetailsSchema,
} from "./types";

function WorkOrderResourceDetailsOrganism() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IWorkOrderResourceDetails>({
    defaultValues: {
      workOrder: "AW-245",
      bookingStatus: "Scheduled",
      resource: "CAFM#",
      strartTime: "15/12/2024, 8:00 AM",
      endTime: "15/12/2024, 10:00 AM",
      duration: "1.5 hours",
      name: "AW-245",
      capacity: "---",
      bookingType: "---",
    },
  });

  return (
    <DetailsScreenOrganism
      title="RESOURCE_DETAILS"
      initialData={getValues()}
      cells={detailsScreenCells}
      sections={detailsScreenSections}
      editable
      deletable
      control={control}
      handleSubmit={handleSubmit}
      onEdit={(data) => console.error(data)}
      errors={errors}
      validationRules={workOrderResourceDetailsSchema}
    />
  );
}

export default WorkOrderResourceDetailsOrganism;
