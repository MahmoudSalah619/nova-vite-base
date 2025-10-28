import { ThemeConfig } from "antd";
import selectConfig from "./inputs/select";
import dateConfig from "./inputs/date";
import generalInputConfig from "./inputs/general";

export const theme: ThemeConfig = {
  components: {
    Select: selectConfig,
    DatePicker: dateConfig,
    Input: generalInputConfig,
    InputNumber: generalInputConfig,
  },
};
