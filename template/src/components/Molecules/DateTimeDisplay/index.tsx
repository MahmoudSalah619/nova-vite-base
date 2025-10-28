// components/Molecules/DateTimeDisplay.tsx

import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import { DateTimeDisplayProps } from "./types";

function DateTimeDisplay({ date, time }: DateTimeDisplayProps) {
  return (
    <div className={styles.dateTimeContainer}>
      <Text variant="P7">{date}</Text>
      <Text variant="P7">{time}</Text>
    </div>
  );
}

export default DateTimeDisplay;
