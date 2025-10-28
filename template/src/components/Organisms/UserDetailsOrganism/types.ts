import { patterns, ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IUserDetails {
  userId: number;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phoneNumber: string;
}

export const userDetailsSchema: ValidationRulesType<IUserDetails> = {
  firstName: {
    required: i18n.t("REQUIRED"),
  },
  lastName: {
    required: i18n.t("REQUIRED"),
  },
  title: {
    required: i18n.t("REQUIRED"),
  },
  phoneNumber: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.phone,
      message: i18n.t("PHONE_VALIDATION"),
    },
  },
};
