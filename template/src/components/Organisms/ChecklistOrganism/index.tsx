import { Checkbox } from "antd";
import CardWrapper from "../../Wrappers/CardWrapper";
import { ChecklistTypes } from "./types";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";
import useToggleState from "@/hooks/useToggleState";

export default function ChecklistOrganism({
  title,
  checklist,
}: ChecklistTypes) {
  const { isSelected, addToSelected } = useToggleState<string>(
    checklist?.list?.filter((item) => item.checked).map((item) => item.id) ?? []
  );

  return (
    <CardWrapper>
      <div className={styles.header}>
        <Text variant="P1">{title}</Text>

        <Button title="Export" prefixIcon="exportIcon" variant="secondary" />
      </div>

      <div className={styles.checklistTitle}>
        <Text variant="P5" className={styles.description}>
          {checklist?.title}{" "}
        </Text>
        {checklist?.required && (
          <Text variant="P5" color="danger700">
            *
          </Text>
        )}
      </div>

      {checklist?.list?.map((item) => (
        <div
          key={item.id}
          className={`${styles.checklistItem} ${styles.checkbox}`}
        >
          <Checkbox
            checked={isSelected(item.id)}
            onChange={() => addToSelected(item.id)}
            id={item.title}
          />
          <label htmlFor={item.title}>
            <Text variant="P3" color="text200">
              {item.title}
            </Text>
          </label>
        </div>
      ))}
    </CardWrapper>
  );
}
