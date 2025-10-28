import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import { ProductNameProps } from "./types";

function ProductName({ text }: ProductNameProps) {
  return (
    <div className={styles.productNameCell}>
      <div className={styles.productIcon}>
        <Icon name="business" width={20} height={20} />
      </div>
      <Text variant="P7" color="text50">
        {text}
      </Text>
    </div>
  );
}

export default ProductName;
