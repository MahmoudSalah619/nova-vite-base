import { patterns, ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IChangePassword {
  email: string;
  otp: string;
  new_password: string;
  confirmPassword: string;
}

export const changePasswordSchema: ValidationRulesType<IChangePassword> = {
  new_password: {
    required: i18n.t("REQUIRED"),
    validate: {
      hasUppercase: (value: string) =>
        patterns.capitalLetter.test(value) || i18n.t("PASSWORD_RULE_UPPERCASE"),
      hasLowercase: (value: string) =>
        patterns.smallLetter.test(value) || i18n.t("PASSWORD_RULE_LOWERCASE"),
      hasNumber: (value: string) =>
        patterns.numberAtLeastOne.test(value) || i18n.t("PASSWORD_RULE_NUMBER"),
      hasSpecialSymbol: (value: string) =>
        patterns.specialSymbol.test(value) || i18n.t("PASSWORD_RULE_SYMBOL"),
      hasEightCharacters: (value: string) =>
        value?.length >= 8 || i18n.t("PASSWORD_RULE_SIZE"),
    },
  },

  confirmPassword: {
    required: i18n.t("REQUIRED"),
    validate: {
      matchesPassword: (value: string, formValues) =>
        value === formValues.new_password || i18n.t("PASSOWRDS_NOT_MATCH"),
    },
  },
};
