import { RateProps } from "antd";
import { GeneralInputProps, InputRef } from "../types";
import { RefObject } from "react";

export type RateInputProps = RateProps &
  GeneralInputProps & {
    ref?: RefObject<InputRef<"rate">>;
    type: "rate";
  };
