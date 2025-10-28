import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface ISlaDetails {
  slaName: string;
  applicableFrom: string;
  applicableWhen: string;
  warnAfter: string;
}

export const slaDetailsSchema: ValidationRulesType<ISlaDetails> = {
  slaName: {
    required: i18n.t("REQUIRED"),
  },
  applicableFrom: {
    required: i18n.t("REQUIRED"),
  },
  applicableWhen: {
    required: i18n.t("REQUIRED"),
  },
  warnAfter: {
    required: i18n.t("REQUIRED"),
  },
};
