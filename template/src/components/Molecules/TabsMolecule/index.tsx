import { Tabs } from "antd";
import ITabsMoleculeProps from "./types";
import styles from "./styles.module.scss";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import TabPane from "antd/es/tabs/TabPane";
import Text from "../../Atoms/Text";

function TabsMolecule({
  paramName,
  tabPanes,
  defaultActiveKey,
  activeKey,
  onChange,
  ...props
}: ITabsMoleculeProps) {
  const [searchParam, setSearchParam] = useSearchParams();

  const defaultKey = useMemo(() => {
    if (searchParam.has(paramName)) return searchParam.get(paramName) as string;

    if (defaultActiveKey) return defaultActiveKey;

    return tabPanes[0].tabKey;
  }, []);

  const activeKeyMemo = useMemo(() => {
    if (activeKey) return activeKey;

    return searchParam.get(paramName) ?? defaultKey;
  }, [searchParam, activeKey, defaultKey]);

  const handleChangeTab = (key: string) => {
    setSearchParam((prev) => {
      prev.delete(paramName);
      prev.append(paramName, key);
      return prev;
    });

    onChange?.(key); // Call the original onChange function if provided
  };

  return (
    <div className={styles.tabsContainer}>
      <Tabs
        {...props}
        className={styles.tabsStyle}
        onChange={handleChangeTab}
        defaultActiveKey={defaultKey}
        activeKey={activeKeyMemo}
      >
        {tabPanes.map((tabPane) => {
          const isActive = tabPane.tabKey === activeKeyMemo;

          return (
            <TabPane
              {...tabPane}
              key={tabPane.tabKey}
              tab={
                <Text
                  variant={isActive ? "P6" : "P3"}
                  color={isActive ? "text300" : "text50"}
                >
                  {tabPane.tab}
                </Text>
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
}

export default TabsMolecule;
