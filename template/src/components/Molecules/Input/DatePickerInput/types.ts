import type { DatePickerProps } from "antd";
import { GeneralInputProps, InputRef } from "../types";
import { Ref } from "react";

export type DatePickerInputProps = Omit<
  DatePickerProps,
  "name" | "required" | "type" | "size"
> &
  Omit<GeneralInputProps, "suffixIcon"> & {
    ref?: Ref<InputRef<"date">>;
    type: "date";
  };
