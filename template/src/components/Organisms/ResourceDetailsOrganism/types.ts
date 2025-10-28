import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IResourceDetails {
  resourceId: string;
  resourceName: string;
  trade: string;
  availability: number;
  status: number;
}

export const resourceDetailsSchema: ValidationRulesType<IResourceDetails> = {
  resourceId: {
    required: i18n.t("REQUIRED"),
  },
  resourceName: {
    required: i18n.t("REQUIRED"),
  },
  trade: {
    required: i18n.t("REQUIRED"),
  },
  availability: {
    required: i18n.t("REQUIRED"),
  },
  status: {
    required: i18n.t("REQUIRED"),
  },
};
