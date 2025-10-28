import ISLAStepperProps from "./type";
import SLAStepStepperMolecule from "../SLAStepStepperMolecule";
import styles from "./styles.module.scss";
import { Divider } from "antd";
import ISLAStepStepperMoleculeProps from "../SLAStepStepperMolecule/types";
import { STATUS_ID } from "@/constants/Status";

function SLAStepper({ statusId, times }: ISLAStepperProps) {
  const steps: ISLAStepStepperMoleculeProps[] = [
    {
      statusId: STATUS_ID.COMPLETED,
      statusText: "ON_TRACK",
      time: times[0],
    },
    {
      statusId: STATUS_ID.WARNNING,
      statusText: "AT_RISK",
      time: times[1],
    },
    {
      statusId: STATUS_ID.DANGER,
      statusText: "OVERDUE",
      time: times[2],
    },
  ];

  return (
    <div className={styles.slaStpper}>
      {steps.map((step, index) => {
        const isActive = statusId === step.statusId;
        return (
          <>
            {Boolean(index) && (
              <div>
                <Divider className={styles.divider} />
              </div>
            )}
            <SLAStepStepperMolecule {...step} isActive={isActive} />
          </>
        );
      })}
    </div>
  );
}

export default SLAStepper;
