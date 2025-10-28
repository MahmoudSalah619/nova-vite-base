import type { InputNumberProps as AntdInputNumberProps } from "antd";
import { GeneralInputProps, InputRef } from "../types";
import { Ref } from "react";

export type NumberInputProps = AntdInputNumberProps &
  GeneralInputProps & {
    ref?: Ref<InputRef<"number">>;
    type: "number";
  };
