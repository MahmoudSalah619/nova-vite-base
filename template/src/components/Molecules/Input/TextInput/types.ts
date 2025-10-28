import { InputProps } from "antd/es/input";
import { GeneralInputProps, InputRef } from "../types";
import { RefObject } from "react";

export type TextInputProps = InputProps &
  GeneralInputProps & {
    ref?: RefObject<InputRef<"text">>;
    type: "text" | "password";
  };
