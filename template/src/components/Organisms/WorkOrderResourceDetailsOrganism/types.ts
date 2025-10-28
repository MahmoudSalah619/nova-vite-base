import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IWorkOrderResourceDetails {
  workOrder: string;
  bookingStatus: string;
  resource: string;
  strartTime: string;
  endTime: string;
  duration: string;
  name: string;
  capacity: string;
  bookingType: string;
}

export const workOrderResourceDetailsSchema: ValidationRulesType<IWorkOrderResourceDetails> =
  {
    workOrder: {
      required: i18n.t("REQUIRED"),
    },
    bookingStatus: {
      required: i18n.t("REQUIRED"),
    },
    resource: {
      required: i18n.t("REQUIRED"),
    },
    strartTime: {
      required: i18n.t("REQUIRED"),
    },
    endTime: {
      required: i18n.t("REQUIRED"),
    },
    duration: {
      required: i18n.t("REQUIRED"),
    },
    name: {
      required: i18n.t("REQUIRED"),
    },
    capacity: {
      required: i18n.t("REQUIRED"),
    },
    bookingType: {
      required: i18n.t("REQUIRED"),
    },
  };
