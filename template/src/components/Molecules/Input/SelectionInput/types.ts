import { Ref } from "react";
import { GeneralInputProps, InputRef } from "../types";
import type { SelectProps } from "antd";
import { DefaultOptionType } from "antd/es/select";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

export type OptionType = DefaultOptionType & {
  i18Label?: TranslationKeyEnum;
};

export type SelectionInputAtomProps = GeneralInputProps & {
  mode?: "multiple" | "tags" | undefined;
} & SelectProps<string | string[] | undefined, OptionType> & {
    ref?: Ref<InputRef<"dropdown">>;
    type: "dropdown";
    mode?: "multiple" | "tags" | undefined;
  };
