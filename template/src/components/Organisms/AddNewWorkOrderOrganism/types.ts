import { patterns, ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IAddNewWorkOrder {
  project: number;
  levelOne: number;
  levelTwo: number;
  levelThree: number;
  levelFour: number;
  levelFive: number;
  serviceType: number;
  startDate: string;
  primaryTrade: number;
  problemType: number;
  priority: number;
  workOrderDescription: string;
  workOrderSummery: string;
  assetCode: string;
  equipmentName: string;
}

export const addNewWorkOrderSchema: ValidationRulesType<IAddNewWorkOrder> = {
  project: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  levelOne: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  levelTwo: {
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  levelThree: {
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  levelFour: {
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  levelFive: {
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  serviceType: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.number,
      message: i18n.t("INVALID_VALUE"),
    },
  },
  primaryTrade: {
    required: i18n.t("REQUIRED"),
  },
  problemType: {
    required: i18n.t("REQUIRED"),
  },
  workOrderDescription: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: patterns.string,
      message: i18n.t("INVALID_VALUE"),
    },
  },
};
