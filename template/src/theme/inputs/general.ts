import COLORS from "@/constants/COLORS";
import { ComponentsConfig } from "../types";

const generalInputConfig: ComponentsConfig["Input"] = {
  controlHeightSM: 33,
  controlHeightLG: 40,

  fontFamily: "MontserratRegular",
  fontSizeLG: 16,
  fontSize: 14,
  fontSizeSM: 14,
  lineHeight: 1.5,
  fontWeightStrong: 400,

  colorText: COLORS.text100,
  colorTextPlaceholder: COLORS.text100,

  borderRadius: 8,
  borderRadiusSM: 8,
  borderRadiusLG: 8,

  hoverBorderColor: COLORS.primary400,
  activeBorderColor: COLORS.primary400,
  controlOutlineWidth: 0,

  colorBgContainerDisabled: COLORS.neutral200,
  colorErrorBorder: COLORS.danger700,
};

export default generalInputConfig;
