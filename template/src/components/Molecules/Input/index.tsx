import InputProps from "./types";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import styles from "./styles.module.scss";
import Icon from "../../Atoms/Icon";
import InputRenderer from "./InputRenderer";
import debounce from "@/utils/debounce";
import Text from "@components/Atoms/Text";

export function Input({
  onChange,
  fullWidth,
  required,
  placeholder,
  i18nPlaceholder,
  label,
  i18nLabel,
  size = "small", // default size
  ...props
}: InputProps) {
  const { t } = useAutoCompleteTranslation();

  const debouncedOnChange = debounce(
    onChange as (...e: any[]) => void,
    props.debounceDelay ?? 0
  );

  return (
    <div
      className={`${styles.inputContainer} ${fullWidth ? styles.fullWidth : ""}`}
    >
      {(!!label || !!i18nLabel) && (
        <Text variant="L1" color="text100">
          {label ?? t(i18nLabel ?? "")}
          {required && " *"}
        </Text>
      )}

      <InputRenderer
        onChange={debouncedOnChange}
        size={size}
        placeholder={placeholder ?? t(i18nPlaceholder ?? "")}
        {...props}
      />

      {props.errorMsg && (
        <div className={styles.errorMsg}>
          <Icon name="error" size={16} />
          <Text variant="P10" color="text50" text={props.errorMsg} />
        </div>
      )}
    </div>
  );
}
