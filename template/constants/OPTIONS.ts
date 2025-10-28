import { OptionType } from "@components/Molecules/Input/SelectionInput/types";
import { STATUS_ID, STATUS_TEXT } from "./Status";

const STATUS_OPTIONS: OptionType[] = [
  {
    value: STATUS_ID.IN_PROGRESS,
    i18Label: STATUS_TEXT[STATUS_ID.IN_PROGRESS],
  },
  {
    value: STATUS_ID.COMPLETED,
    i18Label: STATUS_TEXT[STATUS_ID.COMPLETED],
  },
  { value: STATUS_ID.ON_HOLD, i18Label: STATUS_TEXT[STATUS_ID.ON_HOLD] },
];

export { STATUS_OPTIONS };
