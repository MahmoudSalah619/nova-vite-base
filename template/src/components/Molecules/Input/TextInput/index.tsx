import { TextInputProps } from "./types";
import styles from "./styles.module.scss";
import Icon from "@components/Atoms/Icon";
import { Input, InputProps } from "antd";
import { ReactNode } from "react";

function TextInputRenderer({
  type,
  ...props
}: InputProps & Pick<TextInputProps, "type">) {
  const InputEnum: Record<typeof type, ReactNode> = {
    text: <Input {...props} />,
    password: <Input.Password {...props} />,
  };

  return InputEnum[type];
}

export default function TextInput({
  size,
  className,
  prefixIcon,
  prefixIconSize,
  suffixIcon,
  suffixIconSize,
  errorMsg,
  ...props
}: TextInputProps) {
  return (
    <TextInputRenderer
      size={size}
      className={`${styles.textInput} ${styles[size ?? ""]} ${className}`}
      prefix={
        prefixIcon ? (
          <Icon
            name={prefixIcon}
            size={prefixIconSize ?? (size === "small" ? 12 : 16)}
          />
        ) : undefined
      }
      suffix={
        suffixIcon ? (
          <Icon
            name={suffixIcon}
            size={suffixIconSize ?? (size === "small" ? 12 : 16)}
          />
        ) : undefined
      }
      status={errorMsg ? "error" : undefined}
      {...props}
    />
  );
}
