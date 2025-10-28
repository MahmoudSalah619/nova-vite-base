import { patterns, ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IAddNewResource {
  resourceName: string;
  category: number;
  trade: number;
  resourceCode: string;
  position: number;
}

export const addNewResourceSchema: ValidationRulesType<IAddNewResource> = {
  resourceName: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.string,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  category: {
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  trade: {
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  resourceCode: {
    pattern: {
      value: patterns.string,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  position: {
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
};
