import { ValidationRulesType } from "@/constants/Validation";
import i18n from "@/i18n";

export interface IOtp {
  email: string;
  otp: string;
}

export const otpSchema: ValidationRulesType<IOtp> = {
  otp: {
    required: i18n.t("REQUIRED"),
    pattern: {
      value: /^\d{4}$/,
      message: i18n.t("INVALID_OTP"),
    },
  },
};
