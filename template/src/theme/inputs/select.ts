import COLORS from "@/constants/COLORS";
import { ComponentsConfig } from "../types";
import generalInputConfig from "./general";

const selectConfig: ComponentsConfig["Select"] = {
  ...generalInputConfig,

  optionFontSize: 14,
  optionSelectedColor: COLORS.primary700,
  optionSelectedFontWeight: 700,
  optionActiveBg: COLORS.primary200,
  optionSelectedBg: COLORS.primary300,

  multipleItemColorDisabled: COLORS.text50,
  multipleItemBorderColorDisabled: COLORS.text50,
};

export default selectConfig;
