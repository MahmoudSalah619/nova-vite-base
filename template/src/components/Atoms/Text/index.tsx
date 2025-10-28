import { TextProps } from "./types";
import styles from "./styles.module.scss";
import i18n from "@/i18n";

export default function Text({
  children,
  text,
  i18nText,
  className,
  color,
  variant,
  ...props
}: TextProps) {
  return (
    <p
      {...props}
      className={`${styles[variant]} ${className} ${styles.text} ${color}Color`}
    >
      {text ?? children ?? i18n.t(i18nText ?? "")}
    </p>
  );
}
