import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IProductDetails {
  productId: string;
  productName: string;
  quantity: number;
  availability: number;
}

export const productDetailsSchema: ValidationRulesType<IProductDetails> = {
  productId: {
    required: i18n.t("REQUIRED"),
  },
  productName: {
    required: i18n.t("REQUIRED"),
  },
  quantity: {
    required: i18n.t("REQUIRED"),
  },
  availability: {
    required: i18n.t("REQUIRED"),
  },
};
