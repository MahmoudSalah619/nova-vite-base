import { MappingAlgorithm, OverrideToken } from "antd/es/theme/interface";

export type ComponentsConfig = {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
};
