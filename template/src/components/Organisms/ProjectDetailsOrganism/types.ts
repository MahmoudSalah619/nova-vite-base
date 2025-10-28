import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IProjectDetails {
  projectId: number;
  account: string;
  projectNumber: string;
  projectName: string;
  statusId: number;
}

export const projectDetailsSchema: ValidationRulesType<IProjectDetails> = {
  account: {
    required: i18n.t("REQUIRED"),
  },
  projectNumber: {
    required: i18n.t("REQUIRED"),
  },
  projectName: {
    required: i18n.t("REQUIRED"),
  },
  statusId: {
    required: i18n.t("REQUIRED"),
  },
};
