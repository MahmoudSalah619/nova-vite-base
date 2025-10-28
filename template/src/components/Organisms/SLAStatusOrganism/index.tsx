import ISLAStatusOrganismProps from "./types";
import styles from "./styles.module.scss";
import SLAStepper from "../../Molecules/SLAStepper";
import Text from "../../Atoms/Text";
import StatusIndicator from "../../Molecules/StatusMolecule";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import CardWrapper from "../../Wrappers/CardWrapper";

function SLAStatusOrganism({
  slaType,
  statusId,
  statusText,
  times,
}: ISLAStatusOrganismProps) {
  const { t } = useAutoCompleteTranslation();
  return (
    <CardWrapper className={styles.slaStatusContainer}>
      <div className={styles.slaContent}>
        <Text variant="P1" color="text50">
          {t("SLA")}: {slaType}
        </Text>
        <StatusIndicator
          statusId={statusId}
          statusText={statusText}
          indicator
        />
      </div>

      <SLAStepper statusId={statusId} times={times} />
    </CardWrapper>
  );
}

export default SLAStatusOrganism;
