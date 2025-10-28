import { Rate } from "antd";
import { RateInputProps } from "./types";
import styles from "./styles.module.scss";

export default function RateInput({ count, ...props }: RateInputProps) {
  return <Rate className={styles.rate} count={count ?? 5} {...props} />;
}
