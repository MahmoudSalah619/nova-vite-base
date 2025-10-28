import { ReactNode } from "react";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

function TableHeader({
  title,
  children,
  headerClassName,
}: {
  title?: TranslationKeyEnum;
  children?: ReactNode;
  headerClassName?: string;
}) {
  return (
    <div className={`${styles.headerContainer} ${headerClassName}`}>
      {title && <Text variant="H7" color="text50" i18nText={title} />}
      {children}
    </div>
  );
}

export default TableHeader;
