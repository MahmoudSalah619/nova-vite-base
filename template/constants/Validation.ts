import { RcFile } from "antd/es/upload";
import { FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface Auth {
  emailOrPhone: string;
  email: string;
  phone: string;
  userName: string;
  password: string;
  otp: string;
  newPassword: string;
  new_password: string;
  confirmPassword: string;
  UserPassword: string;
  ConfirmUserPassword: string;
  brandName: string;
  phoneNumber: number;
  bio: string;
  brandIcon: RcFile | undefined | File;
  commercialRegister: RcFile | undefined;
  taxId: RcFile | undefined;
  homeAddress: string;
  jobTitle: string;
  fullName: string;
  companyName: string;
}
export interface MerchantInfo {
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: number;
  bio: string;
}
export interface UserInfo {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: number;
  homeAddress: string;
}

export type ValidationRuleItemType<T extends FieldValues> =
  | Omit<
      RegisterOptions<T, Path<T>>,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined;

export type ValidationRulesType<T extends FieldValues> = Partial<
  Record<keyof T, ValidationRuleItemType<T>>
>;

export const patterns = {
  emailOrPhone: /^[^\s@]+@[^\s@]+\.[^\s@]+$|^\d{11}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\d{11}$/,
  string: /^[a-zA-Z0-9\s]+$/,
  number: /^\d+$/,
  numberAtLeastOne: /\d/,
  capitalLetter: /[A-Z]/,
  smallLetter: /[a-z]/,
  specialSymbol: /[~!@#%^&*()+_=/-]/,
};

const ValidationSchema = {
  emailOrPhone: {
    required: "This field is required",
    pattern: {
      value: patterns.emailOrPhone,
      message: "Enter a valid email address or a 11-digit phone number",
    },
  },
  email: {
    required: "This field is required",
    pattern: {
      value: patterns.email,
      message: "Enter a valid email address",
    },
  },
  passwordLogin: {
    required: "This field is required",
    // TODO: add regex for password validation
  },

  passwordLength: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        "Password must include uppercase, lowercase, number, and special character",
    },
  },
  otp: {
    required: "OTP is required",
    pattern: {
      value: /^\d{4}$/,
      message: "OTP must be a 4-digit number",
    },
  },
  NewPassword: {
    required: "New password is required",
    validate: {
      hasUppercase: (value: string) =>
        patterns.capitalLetter.test(value) ||
        "Password must include at least one uppercase letter",
      hasLowercase: (value: string) =>
        patterns.smallLetter.test(value) ||
        "Password must include at least one lowercase letter",
      hasNumber: (value: string) =>
        patterns.numberAtLeastOne.test(value) ||
        "Password must include at least one number",
      hasSpecialSymbol: (value: string) =>
        patterns.specialSymbol.test(value) ||
        "Password must include at least one special symbol",
      hasEightCharacters: (value: string) =>
        value?.length >= 8 || "Password must be at least 8 characters long",
    },
  },
  confirmPassword: (watch: (field: string) => string) => ({
    required: "Confirm password is required",
    validate: {
      matchesPassword: (value: string) =>
        value === watch("new_password") || "Passwords do not match",
    },
  }),

  UserPassword: {
    required: "New password is required",
    validate: {
      hasUppercase: (value: string) =>
        /[A-Z]/.test(value) ||
        "Password must include at least one uppercase letter",
      hasEightCharacters: (value: string) =>
        value?.length >= 8 || "Password must be at least 8 characters long",
      hasNumber: (value: string) =>
        /\d/.test(value) || "Password must include at least one number",
    },
  },
  ConfirmUserPassword: (watch: (field: string) => string) => ({
    required: "Confirm password is required",
    validate: {
      matchesPassword: (value: string) =>
        value === watch("UserPassword") || "Passwords do not match",
    },
  }),

  brandName: {
    required: "Brand name is required",
    minLength: {
      value: 2,
      message: "Brand name must be at least 2 characters long",
    },
    maxLength: {
      value: 50,
      message: "Brand name cannot exceed 50 characters",
    },
  },

  phoneNumber: {
    required: "Phone number is required",
    pattern: {
      value: /^\d{11}$/,
      message: "Phone number must be 11 digits",
    },
  },

  bio: {
    required: "Bio is required",
  },
  brandIcon: {
    required: "Brand icon is required",
  },
  commercialRegister: {
    required: "Commercial Register document is required",
  },
  taxId: {
    required: "Tax ID document is required",
  },

  userName: {
    required: "user name is required",
    minLength: {
      value: 4,
      message: "user name must be at least 2 characters long",
    },
    maxLength: {
      value: 15,
      message: "Brand name cannot exceed 15 characters",
    },
  },
  fullName: {
    required: "full name is required",
    minLength: {
      value: 4,
      message: "user name must be at least 2 characters long",
    },
    maxLength: {
      value: 15,
      message: "Brand name cannot exceed 15 characters",
    },
  },
  jobTitle: {
    required: "job title is required",
    minLength: {
      value: 4,
      message: "job title must be at least 2 characters long",
    },
    maxLength: {
      value: 15,
      message: "Brand name cannot exceed 15 characters",
    },
  },
  companyName: {
    required: "company name is required",
    minLength: {
      value: 4,
      message: "company name must be at least 2 characters long",
    },
    maxLength: {
      value: 15,
      message: "Brand name cannot exceed 15 characters",
    },
  },
  homeAddress: {
    required: "Home address is required",
    minLength: {
      value: 4,
      message: "Home address must be at least 2 characters long",
    },
    maxLength: {
      value: 30,
      message: "Home address cannot exceed 15 characters",
    },
  },
};

export default ValidationSchema;
