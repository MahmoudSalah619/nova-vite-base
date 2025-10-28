import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import COLORS from "@/constants/COLORS";
import StatusMoleculeProps from "./types";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { STATUS_ID, STATUS_TEXT } from "@/constants/Status";

const statusMap: Record<number, Status> = {
  [STATUS_ID.IN_PROGRESS]: "inProgress",
  [STATUS_ID.COMPLETED]: "success",
  [STATUS_ID.ON_HOLD]: "default",
  [STATUS_ID.WARNNING]: "warning",
  [STATUS_ID.DANGER]: "error",
};

const statusTextColor: Record<Status, keyof typeof COLORS> = {
  success: "success700",
  inProgress: "primary400",
  warning: "warning700",
  error: "danger700",
  default: "text100",
};

function StatusMolecule({
  statusId,
  statusText,
  i18StatusText,
  indicator,
}: StatusMoleculeProps) {
  const { t } = useAutoCompleteTranslation();

  const status = statusMap[statusId] || "default";
  const translatedStatusText = i18StatusText ?? STATUS_TEXT[statusId];
  return (
    <div className={`${styles.statusIndicator} ${styles[status]}`}>
      {indicator && <span className={styles.indicator} />}
      <Text variant="L2" color={statusTextColor[status]}>
        {statusText || t(translatedStatusText)}
      </Text>
    </div>
  );
}

export default StatusMolecule;
