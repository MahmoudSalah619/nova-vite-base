import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

interface ISLAStepStepperMoleculeProps {
  time: string;
  statusId: number;
  statusText: TranslationKeyEnum;
  isActive?: boolean;
}

export default ISLAStepStepperMoleculeProps;
