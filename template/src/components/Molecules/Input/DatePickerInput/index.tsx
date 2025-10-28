import { DatePicker } from "antd";
import styles from "./styles.module.scss";
import { useLayoutEffect, useState } from "react";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { DatePickerInputProps } from "./types";

export default function DatePickerInput({
  ref,
  format,
  placeholder,
  className,
  errorMsg,
  size,
  ...props
}: DatePickerInputProps) {
  const { t } = useAutoCompleteTranslation();

  const [isDateOpen, setIsDateOpen] = useState(false);

  useLayoutEffect(() => {
    const nowBtns = document.querySelectorAll(".ant-picker-now-btn");
    nowBtns.forEach((btn) => {
      if (btn) btn.innerHTML = t("TODAY");
    });
  }, [isDateOpen]);

  return (
    <DatePicker
      ref={ref}
      className={`${styles.datePicker}  ${styles[size ?? ""]}  ${className}`}
      showTime
      format={format ?? "DD/MM/YYYY HH:mm"}
      size={size}
      placeholder={placeholder ?? "DD/MM/YYYY"}
      onClick={() => {
        setIsDateOpen((prev) => !prev);
      }}
      status={errorMsg ? "error" : undefined}
      {...props}
    />
  );
}
