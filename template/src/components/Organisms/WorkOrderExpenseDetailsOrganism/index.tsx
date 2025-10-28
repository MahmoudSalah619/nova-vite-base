import { useForm } from "react-hook-form";
import DetailsScreenOrganism from "../DetailsScreenOrganism";
import { detailsScreenCells, detailsScreenSections } from "./static";
import {
  IWorkOrderExpenseDetails,
  workOrderExpenseDetailsSchema,
} from "./types";

function WorkOrderExpenseDetailsOrganism() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IWorkOrderExpenseDetails>({
    defaultValues: {
      name: "مفتاح صوت ",
      category: "HK",
      qunatity: 1000,
      costPrice: 550,
      lineStatus: "Used",
      postingDate: "15/5/2024",
      owner: "Bit68",
      workOrder: "WF-551",
    },
  });

  return (
    <DetailsScreenOrganism
      title="EXPENSES_DETAILS"
      initialData={getValues()}
      cells={detailsScreenCells}
      sections={detailsScreenSections}
      editable
      deletable
      control={control}
      handleSubmit={handleSubmit}
      onEdit={(data) => console.error(data)}
      errors={errors}
      validationRules={workOrderExpenseDetailsSchema}
    />
  );
}

export default WorkOrderExpenseDetailsOrganism;
