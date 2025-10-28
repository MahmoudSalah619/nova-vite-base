import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";
import { StaticticsCardProps } from "./types";

function StaticticsCard({ label, value, icon }: StaticticsCardProps) {
  return (
    <CardWrapper className={styles.StaticticsCard}>
      <Text color="text50" variant="H5">
        {value}
      </Text>

      <div className={styles.iconCon}>
        {icon && <Image alt="icon" src={icon} width={35} height={35} />}
        <Text variant="P4" color="text50" i18nText={label} />
      </div>
    </CardWrapper>
  );
}

export default StaticticsCard;
