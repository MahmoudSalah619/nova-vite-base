import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

interface StatusMoleculeProps {
  statusId: number;
  i18StatusText?: TranslationKeyEnum;
  statusText?: string;
  indicator?: boolean;
}

export default StatusMoleculeProps;
