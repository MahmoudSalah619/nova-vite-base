import iconList from "@/src/components/Atoms/Icon/list";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import { TextInputProps } from "./TextInput/types";
import { SelectionInputAtomProps } from "./SelectionInput/types";
import { DatePickerInputProps } from "./DatePickerInput/types";
import CustomPhoneInputProps from "./CustomPhoneInput/types";
import { PickerRef } from "rc-picker";
import { BaseSelectRef } from "rc-select";
import { NumberInputProps } from "./NumberInput/types";
import type { InputRef as AntdInputRef } from "antd";
import { TextAreaProps } from "./TextAreaInput/types";
import { RateInputProps } from "./RateInput/types";

export type InputType =
  | "text"
  | "number"
  | "textarea"
  | "password"
  | "date"
  | "phone"
  | "dropdown"
  | "rate";

export type InputSize = "small" | "large";

export type Label =
  | { label?: string; i18nLabel?: never }
  | { label?: never; i18nLabel?: TranslationKeyEnum };

export type Placeholder =
  | { placeholder?: string; i18nPlaceholder?: never }
  | { placeholder?: never; i18nPlaceholder?: TranslationKeyEnum };

export type PrefixIcon =
  | { prefixIcon: keyof typeof iconList; prefixIconSize?: number }
  | { prefixIcon?: never; prefixIconSize?: never };

export type SuffixIcon =
  | { suffixIcon: keyof typeof iconList; suffixIconSize?: number }
  | { suffixIcon?: never; suffixIconSize?: never };

type InputRefMap = {
  text: AntdInputRef | null;
  password: AntdInputRef | null;
  textarea: HTMLTextAreaElement | null;

  number: HTMLInputElement | null;
  date: PickerRef | null;
  dropdown: BaseSelectRef | null;
  phone: HTMLInputElement | null;
  otp: HTMLInputElement | null;
};

export type InputRef<T extends InputType> = T extends keyof InputRefMap
  ? InputRefMap[T]
  : never;

export interface BaseInputProps {
  type: InputType;
  name?: string;
  size?: InputSize;
  required?: boolean;
  disabled?: boolean;
  errorMsg?: string;
  debounceDelay?: number;
  fullWidth?: boolean;
}

export type GeneralInputProps = BaseInputProps &
  Label &
  Placeholder &
  PrefixIcon &
  SuffixIcon;

type InputProps =
  | TextInputProps
  | NumberInputProps
  | DatePickerInputProps
  | CustomPhoneInputProps
  | SelectionInputAtomProps
  | TextAreaProps
  | RateInputProps;

export default InputProps;
