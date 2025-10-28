import { HTMLAttributes, ReactNode } from "react";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import COLORS from "@/constants/COLORS";

type TextContent =
  | { i18nText: TranslationKeyEnum; text?: never; children?: never }
  | { i18nText?: never; text: string; children?: never }
  | { i18nText?: never; text?: never; children: ReactNode };

type BaseProps = {
  variant: TextVariant;
  color?: keyof typeof COLORS;
};

export type TextProps = BaseProps &
  TextContent &
  HTMLAttributes<HTMLParagraphElement>;
