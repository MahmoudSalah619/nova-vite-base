import { patterns, ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IAddNewUser {
  userName: string;
  email: string;
  phoneNumber: string;
  jobTitle: string;
  userType: number;
  additionalNotes: string;
}

export const addNewUserSchema: ValidationRulesType<IAddNewUser> = {
  userName: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.string,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  email: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.email,
      message: i18n.t("INVALID_EMAIL"),
    },
  },
  phoneNumber: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.phone,
      message: i18n.t("INVALID_PHONE"),
    },
  },
  jobTitle: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.string,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  userType: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  additionalNotes: {
    pattern: {
      value: patterns.string,
      message: i18n.t("INVALID_VALUE"),
    },
  },
};
