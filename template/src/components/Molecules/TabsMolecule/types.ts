import { TabPaneProps, TabsProps } from "antd";

interface ITabsPaneProps extends TabPaneProps {
  tabKey: string;
}

interface ITabsMoleculeProps extends TabsProps {
  paramName: string;
  tabPanes: ITabsPaneProps[];
}

export default ITabsMoleculeProps;
