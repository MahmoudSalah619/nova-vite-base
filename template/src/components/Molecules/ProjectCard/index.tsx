import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";

export default function ProjectCard({
  title,
  bodyText,
  onClick = () => {},
}: {
  title: string;
  bodyText: string;
  onClick?: () => void;
}) {
  return (
    <div className={styles.projectCard} onClick={onClick}>
      <div className={styles.projectCardHeader}>
        <Icon name="business" width={16.67} height={15} />
        <Text variant="P7">{title}</Text>
        <Icon name="menuIcon" size={13.33} onClick={() => {}} />
      </div>

      {bodyText && (
        <div className={styles.projectCardBody}>
          <Text variant="B2" className={styles.projectCardBodyTitle}>
            {bodyText}
          </Text>
        </div>
      )}
    </div>
  );
}
