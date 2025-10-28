import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { NumberInputProps } from "./types";
import { InputNumber as AntdInputNumber } from "antd";
import Icon from "@components/Atoms/Icon";

export default function NumberInput({
  ref,
  placeholder,
  i18nPlaceholder,
  className,
  errorMsg,
  size,
  prefixIcon,
  prefixIconSize,
  suffixIcon,
  suffixIconSize,
  ...props
}: NumberInputProps) {
  const { t } = useAutoCompleteTranslation();

  return (
    <AntdInputNumber
      ref={ref}
      className={`${styles.input}  ${styles[size ?? ""]}  ${className}`}
      placeholder={i18nPlaceholder ? t(i18nPlaceholder) : placeholder}
      status={errorMsg ? "error" : undefined}
      controls={false}
      size={size}
      prefix={prefixIcon && <Icon name={prefixIcon} size={prefixIconSize} />}
      suffix={suffixIcon && <Icon name={suffixIcon} size={suffixIconSize} />}
      {...props}
    />
  );
}
