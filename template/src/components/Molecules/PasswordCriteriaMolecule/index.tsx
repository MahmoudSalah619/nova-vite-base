import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Icon from "@components/Atoms/Icon";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Text from "@components/Atoms/Text";

export default function PasswordCriteriaMolecule({
  title,
  value,
}: {
  title: TranslationKeyEnum;
  value: string;
}) {
  const { t } = useAutoCompleteTranslation();
  const [status, setStatus] = useState("neutral");

  const targetTest = new Map<string, RegExp>([
    ["Capital_Letter", /[A-Z]/],
    ["Small_Letter", /[a-z]/],
    ["Number", /[0-9]/],
    ["Special_Symbol", /[~!@#%^&*()+_=/-]/],
  ]);

  const statusEnum: Record<string, "dotGray" | "dotGreen" | "dotRed"> = {
    neutral: "dotGray",
    success: "dotGreen",
    error: "dotRed",
  };

  useEffect(() => {
    if (value) {
      if (targetTest.get(title)?.test(value)) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } else {
      setStatus("neutral");
    }
  }, [value]);

  return (
    <div className={styles.criteriaContainer}>
      <Icon name={statusEnum[status]} size={12} />
      <Text variant="L1">{t(title)}</Text>
    </div>
  );
}
