import dayjs from "dayjs";
import Icon from "../../Atoms/Icon";
import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import IRiskMoleculeProps from "./types";
import { useEffect, useMemo, useState } from "react";

function RiskMolecule({ time: initialTime, isAtRisk }: IRiskMoleculeProps) {
  const [time, setTime] = useState(dayjs(initialTime).diff(dayjs()));

  const timeFormatted = useMemo(() => {
    const totalMinutes = Math.floor(time / 60_000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours > 0 ? `${hours}H` : ""} ${
      minutes > 0 ? `${minutes}m` : ""
    }`;
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime - 60_000;
        if (newTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return newTime;
      });
    }, 60_000);

    return () => clearInterval(timer);
  }, [initialTime]);

  return (
    <>
      {isAtRisk && time > 0 && (
        <div className={styles.riskContainer}>
          <div className={styles.riskIcon}>
            <Icon name="warning" size={24} />
          </div>
          <div>
            <Text variant="P3" color="text300" i18nText="AT_RIKS_AFTER" />
            <Text variant="H7" color="text300" className={styles.riskTime}>
              {timeFormatted}
            </Text>
          </div>
        </div>
      )}
    </>
  );
}

export default RiskMolecule;
