import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import { IWorkOrderExpenseDetails } from "./types";
import styles from "./styles.module.scss";

const detailsScreenCells: DetailsScreenCells<IWorkOrderExpenseDetails> = {
  category: {
    label: "CATEGORY",
    isEditable: true,
  },
  qunatity: {
    label: "QUANTITY",
    isEditable: true,
  },
  costPrice: {
    label: "COST_PRICE",
    isEditable: true,
  },
  lineStatus: {
    label: "LINE_STATUS",
    isEditable: true,
  },
  postingDate: {
    label: "POSTING_DATE",
    isEditable: true,
  },
  name: {
    label: "NAME",
    isEditable: true,
  },
  owner: {
    label: "OWNER",
    isEditable: true,
  },
  workOrder: {
    label: "WORK_ORDER",
    isEditable: true,
  },
};

const detailsScreenSections: DetailsScreenSection<IWorkOrderExpenseDetails>[] =
  [
    {
      rows: [
        {
          className: styles.customRow1Style,
          cells: ["name", "category", "category", "qunatity", "lineStatus"],
        },
        {
          className: styles.customRow2Style,
          cells: ["postingDate", "workOrder", "owner"],
        },
      ],
    },
  ];

export { detailsScreenCells, detailsScreenSections };
