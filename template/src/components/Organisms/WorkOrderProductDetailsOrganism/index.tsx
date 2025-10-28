import { useForm } from "react-hook-form";
import DetailsScreenOrganism from "../DetailsScreenOrganism";
import { detailsScreenCells, detailsScreenSections } from "./static";
import {
  IWorkOrderProductDetails,
  workOrderProductDetailsSchema,
} from "./types";

function WorkOrderProductDetailsOrganism() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IWorkOrderProductDetails>({
    defaultValues: {
      productId: 1367368,
      productName: "بكرة قصدير لحام",
      unitGroup: "Maintenance",
      defaultUnit: 122,
      defaultPriceList: "P2",
      decimalsSupported: 2,
    },
  });

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
      validationRules={workOrderProductDetailsSchema}
    />
  );
}

export default WorkOrderProductDetailsOrganism;
