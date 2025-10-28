import { Controller, FieldValues } from "react-hook-form";
import { ControlledInputProps } from "./types";
import { Input } from "../Input";

/** @description Rhf: React Hook Form */
export default function ControlledInput<T extends FieldValues>({
  control,
  name,
  validationRules,
  ...props
}: ControlledInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={validationRules}
      render={({ field }) => {
        return (
          // @ts-ignore
          <Input onChange={field.onChange} value={field.value} {...props} />
        );
      }}
    />
  );
}
