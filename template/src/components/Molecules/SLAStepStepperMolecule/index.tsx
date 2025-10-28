import Text from "../../Atoms/Text";
import ISLAStepStepperMoleculeProps from "./types";
import styles from "./styles.module.scss";
import { STATUS_ID } from "@/constants/Status";

const statusClassNameMap: Record<number, string> = {
  [STATUS_ID.COMPLETED]: styles.onTrack,
  [STATUS_ID.WARNNING]: styles.atRisk,
  [STATUS_ID.DANGER]: styles.overdue,
};

function SLAStepStepperMolecule({
  statusId,
  statusText,
  time,
  isActive,
}: ISLAStepStepperMoleculeProps) {
  return (
    <div className={styles.stepContainer}>
      <div
        className={`${styles.ellipse} ${isActive ? statusClassNameMap[statusId] : ""}`}
      />
      <div className={styles.stepContent}>
        <Text variant="P6" color="text50" i18nText={statusText} />
        <Text variant="P6" color="text50">
          {time}
        </Text>
      </div>
    </div>
  );
}

export default SLAStepStepperMolecule;
