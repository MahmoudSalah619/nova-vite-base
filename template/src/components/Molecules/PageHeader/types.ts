import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import { ReactNode } from "react";

interface PageHeaderProps {
  className?: string;
  title?: string;
  i18nTitle?: TranslationKeyEnum;
  children?: ReactNode;
  subtitleContent?: ReactNode;
  childCon?: string;
  canGoBack?: boolean;
}

export default PageHeaderProps;
