import StatusMolecule from "@components/Molecules/StatusMolecule";
import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import styles from "./styles.module.scss";
import { IProductDetails } from "./types";
import { STATUS_OPTIONS } from "@/constants/OPTIONS";

const reviewScreenCells: DetailsScreenCells<IProductDetails> = {
  productId: {
    label: "PRODUCT_ID",
    isEditable: true,
  },
  productName: {
    label: "PRODUCT_NAME",
    isEditable: true,
  },
  quantity: {
    label: "QUANTITY",
    isEditable: true,
    className: styles.quantityCellStyle,
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
};

const reviewScreenSections: DetailsScreenSection<IProductDetails>[] = [
  {
    rows: [
      {
        className: styles.customStyleRow,
        cells: ["productName", "productId", "quantity", "availability"],
      },
    ],
  },
];

export { reviewScreenCells, reviewScreenSections };
