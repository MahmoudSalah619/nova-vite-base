import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IAssetDetails {
  assetName: string;
  assetCode: string;
  primaryTrade: string;
  qrCode: string;
}

export const assetDetailsSchema: ValidationRulesType<IAssetDetails> = {
  assetName: {
    required: i18n.t("REQUIRED"),
  },
  assetCode: {
    required: i18n.t("REQUIRED"),
  },
  primaryTrade: {
    required: i18n.t("REQUIRED"),
  },
  qrCode: {
    required: i18n.t("REQUIRED"),
  },
};
