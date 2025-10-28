import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import styles from "./styles.module.scss";

interface IWorkOrderProductDetails {
  productName: string;
  productId: number;
  unitGroup: string;
  defaultUnit: number;
  defaultPriceList: string;
  decimalsSupported: number;
}

const detailsScreenCells: DetailsScreenCells<IWorkOrderProductDetails> = {
  productName: {
    label: "PRODUCT_NAME",
    isEditable: true,
  },
  productId: {
    label: "PRODUCT_ID",
    isEditable: true,
  },
  unitGroup: {
    label: "UNIT_GROUP",
    isEditable: true,
  },
  defaultUnit: {
    label: "DEFAULT_UNIT",
    isEditable: true,
  },
  defaultPriceList: {
    label: "DEFAULT_PRICE_LIST",
    isEditable: true,
    className: styles.largeCellStyle,
  },
  decimalsSupported: {
    label: "DECIMALS_SUPPORTED",
    isEditable: true,
    className: styles.largeCellStyle,
  },
};

const detailsScreenSections: DetailsScreenSection<IWorkOrderProductDetails>[] =
  [
    {
      rows: [
        {
          className: styles.customRowStyle,
          cells: [
            "productName",
            "productId",
            "unitGroup",
            "defaultUnit",
            "defaultPriceList",
            "decimalsSupported",
          ],
        },
      ],
    },
  ];

export { detailsScreenCells, detailsScreenSections };
