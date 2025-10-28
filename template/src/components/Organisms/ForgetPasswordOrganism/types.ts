import { patterns, ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IForgotPassword {
  email: string;
}

export const forgotPasswordSchema: ValidationRulesType<IForgotPassword> = {
  email: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.email,
      message: i18n.t("INVALID_EMAIL"),
    },
  },
};
