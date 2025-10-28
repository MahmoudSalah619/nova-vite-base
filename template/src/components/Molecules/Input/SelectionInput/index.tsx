import { Select } from "antd";
import { SelectionInputAtomProps } from "./types";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { useMemo } from "react";
import debounce from "@/utils/debounce";
import Icon from "@components/Atoms/Icon";
import styles from "./styles.module.scss";

export default function SelectionInput({
  options,
  placeholder,
  i18nPlaceholder,
  errorMsg,
  prefixIcon,
  prefixIconSize,
  suffixIcon,
  suffixIconSize,
  className,
  onSearch,
  size,
  ...props
}: SelectionInputAtomProps) {
  const { t } = useAutoCompleteTranslation();

  const translatedOptions = useMemo(
    () =>
      options?.map((option) => ({
        ...option,
        value: option.value?.toString(),
        label: option.i18Label ? t(option.i18Label) : option.label,
      })) ?? [],
    [options, t]
  );

  const debouncedSearchHandler = useMemo(
    () => debounce((e) => onSearch?.(e), 500),
    []
  );

  return (
    <Select
      placeholder={placeholder ?? t(i18nPlaceholder ?? "SELECT")}
      className={` ${styles.selectionInput} ${styles[size ?? ""]} ${className}`}
      options={translatedOptions}
      onSearch={onSearch ? debouncedSearchHandler : undefined}
      size={size}
      prefix={
        prefixIcon ? (
          <Icon name={prefixIcon} size={prefixIconSize} />
        ) : undefined
      }
      suffixIcon={
        suffixIcon ? (
          <Icon name={suffixIcon} size={suffixIconSize} />
        ) : (
          <Icon name="inputsDown" />
        )
      }
      allowClear
      status={errorMsg ? "error" : undefined}
      {...props}
    />
  );
}
