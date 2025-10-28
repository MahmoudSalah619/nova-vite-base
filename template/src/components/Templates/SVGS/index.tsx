import iconList from "@components/Atoms/Icon/list";
import styles from "./styles.module.scss";
import Icon from "@components/Atoms/Icon";
import Text from "@components/Atoms/Text";

export default function SvgsLayout() {
  return (
    <div className={styles.mainContainer}>
      {Object.keys(iconList).map((iconName) => (
        <div className={styles.svgContainer}>
          <Icon name={iconName as keyof typeof iconList} size={48} />
          <Text variant="H4">{iconName}</Text>
        </div>
      ))}
    </div>
  );
}
