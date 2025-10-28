import { GeneralInputProps, InputRef } from "../types";
import { Ref, TextareaHTMLAttributes } from "react";

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
  GeneralInputProps & {
    ref?: Ref<InputRef<"textarea">>;
    type: "textarea";
  };
