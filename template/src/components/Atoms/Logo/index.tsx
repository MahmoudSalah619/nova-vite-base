import Text from "../Text";
import styles from "./style.module.scss";

export default function Logo({ className }: { className?: string }) {
  // TODO: Replace with actual logo image
  return (
    <Text
      className={`${styles.logo} ${className}`}
      variant="H1"
      text="Logo"
      color="text300"
    />
  );
}
