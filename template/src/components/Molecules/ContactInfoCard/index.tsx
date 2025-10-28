import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import IContactInfoCardProps from "./types";
import styles from "./styles.module.scss";

function ContactInfoCard({
  title,
  iconName,
  subtitle,
  description,
}: IContactInfoCardProps) {
  return (
    <CardWrapper className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <Icon name={iconName} size={32} />
      </div>

      <div className={styles.titleContainer}>
        <Text variant="H7" i18nText={title} />
        <Text variant="P3" color="text200">
          {subtitle}
        </Text>
      </div>

      <Text variant="H6">{description}</Text>
    </CardWrapper>
  );
}

export default ContactInfoCard;
