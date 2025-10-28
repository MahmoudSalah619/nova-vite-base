import { Link, LinkProps } from "react-router-dom";
import Text from "../Text";
import styles from "./styles.module.scss";
import COLORS from "@/constants/COLORS";

interface HyperLinkProps extends LinkProps {
  title: string;
  fontColor?: keyof typeof COLORS;
  fontVariant: TextVariant;
}

function HyperLink({
  title,
  fontVariant,
  fontColor,
  ...otherProps
}: HyperLinkProps) {
  return (
    <Link className={styles.link} {...otherProps}>
      <Text
        color={fontColor}
        variant={fontVariant}
        className={styles.customText}
      >
        {title}
      </Text>
    </Link>
  );
}

export default HyperLink;
