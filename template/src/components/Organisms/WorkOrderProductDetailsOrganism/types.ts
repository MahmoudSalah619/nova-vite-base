import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IWorkOrderProductDetails {
  productName: string;
  productId: number;
  unitGroup: string;
  defaultUnit: number;
  defaultPriceList: string;
  decimalsSupported: number;
}

export const workOrderProductDetailsSchema: ValidationRulesType<IWorkOrderProductDetails> =
  {
    productName: {
      required: i18n.t("REQUIRED"),
    },
    productId: {
      required: i18n.t("REQUIRED"),
    },
    unitGroup: {
      required: i18n.t("REQUIRED"),
    },
    defaultUnit: {
      required: i18n.t("REQUIRED"),
    },
    defaultPriceList: {
      required: i18n.t("REQUIRED"),
    },
    decimalsSupported: {
      required: i18n.t("REQUIRED"),
    },
  };
