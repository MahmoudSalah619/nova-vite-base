import { Control, FieldValues, Path } from "react-hook-form";
import { ValidationRuleItemType } from "@/constants/Validation";
import InputProps from "../Input/types";

export type ControlledInputProps<T extends FieldValues> =
  Partial<InputProps> & {
    control: Control<T>;
    name: Path<T>;
    validationRules?: ValidationRuleItemType<T>;
  };
