import { patterns, ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface ILogin {
  email: string;
  password: string;
}

export const loginSchema: ValidationRulesType<ILogin> = {
  email: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.email,
      message: i18n.t("INVALID_EMAIL"),
    },
  },
  password: {
    required: i18n.t("REQUIRED"),
  },
};
