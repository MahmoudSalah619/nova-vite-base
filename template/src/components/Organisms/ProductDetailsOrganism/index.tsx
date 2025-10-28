import { useForm } from "react-hook-form";
import { IProductDetails, productDetailsSchema } from "./types";
import { reviewScreenCells, reviewScreenSections } from "./static";
import { STATUS_ID } from "@/constants/Status";
import DetailsScreenOrganism from "../DetailsScreenOrganism";

function ProductDetailsOrganism() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IProductDetails>({
    defaultValues: {
      productId: "#1636884473",
      productName: "Mina Ayman Maher",
      quantity: 15,
      availability: STATUS_ID.ON_HOLD,
    },
  });

  return (
    <DetailsScreenOrganism
      title="PRODUCT_DETAILS"
      initialData={getValues()}
      cells={reviewScreenCells}
      sections={reviewScreenSections}
      editable
      deletable
      control={control}
      handleSubmit={handleSubmit}
      onEdit={(data) => console.error(data)}
      errors={errors}
      validationRules={productDetailsSchema}
      deletableInEditMode
    />
  );
}

export default ProductDetailsOrganism;
