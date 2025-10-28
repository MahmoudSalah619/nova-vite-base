import COLORS from "@/constants/COLORS";
import { ComponentsConfig } from "../types";
import generalInputConfig from "./general";

const dateConfig: ComponentsConfig["DatePicker"] = {
  ...generalInputConfig,

  multipleItemColorDisabled: COLORS.text50,
  multipleItemBorderColorDisabled: COLORS.text50,

  colorPrimary: COLORS.primary400,
};

export default dateConfig;
