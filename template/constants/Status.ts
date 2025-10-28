import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";

const STATUS_ID = {
  COMPLETED: 1,
  IN_PROGRESS: 2,
  WARNNING: 3,
  DANGER: 4,
  ON_HOLD: 5,
};

const STATUS_TEXT: Record<number, TranslationKeyEnum> = {
  [STATUS_ID.IN_PROGRESS]: "IN_PROGRESS",
  [STATUS_ID.COMPLETED]: "COMPLETED",
  [STATUS_ID.ON_HOLD]: "ON_HOLD",
};

export { STATUS_TEXT, STATUS_ID };
