import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IWorkOrderExpenseDetails {
  name: string;
  category: string;
  qunatity: number;
  costPrice: number;
  lineStatus: string;
  postingDate: string;
  owner: string;
  workOrder: string;
}

export const workOrderExpenseDetailsSchema: ValidationRulesType<IWorkOrderExpenseDetails> =
  {
    name: {
      required: i18n.t("REQUIRED"),
    },
    category: {
      required: i18n.t("REQUIRED"),
    },
    qunatity: {
      required: i18n.t("REQUIRED"),
    },
    costPrice: {
      required: i18n.t("REQUIRED"),
    },
    lineStatus: {
      required: i18n.t("REQUIRED"),
    },
    postingDate: {
      required: i18n.t("REQUIRED"),
    },
    owner: {
      required: i18n.t("REQUIRED"),
    },
    workOrder: {
      required: i18n.t("REQUIRED"),
    },
  };
