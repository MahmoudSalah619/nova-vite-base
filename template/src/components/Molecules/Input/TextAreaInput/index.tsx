import { Input } from "antd";
import { TextAreaProps } from "./types";
import styles from "./styles.module.scss";
import Text from "@components/Atoms/Text";
import { ChangeEvent } from "react";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

const { TextArea } = Input;

export default function TextAreaInput({
  ref,
  size,
  className,
  onResize,
  maxLength,
  value,
  onChange,
  i18nPlaceholder,
  placeholder,
  errorMsg,
  ...props
}: TextAreaProps) {
  const { t } = useAutoCompleteTranslation();
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= (maxLength ?? Infinity)) onChange?.(e);
  };

  return (
    <div className={styles.textAreaContainer}>
      <TextArea
        maxLength={maxLength}
        ref={ref}
        className={`${styles.textArea} ${styles[size ?? ""]} ${className}`}
        size={size}
        value={value}
        onChange={handleChange}
        placeholder={placeholder ?? t(i18nPlaceholder ?? "")}
        status={errorMsg ? "error" : ""}
        //@ts-ignore
        onResize={onResize}
        {...props}
      />

      {!!maxLength && (
        <Text
          variant="P11"
          className={styles.maxLengthText}
          text={`${value?.toString().length ?? 0}/${maxLength}`}
        />
      )}
    </div>
  );
}
