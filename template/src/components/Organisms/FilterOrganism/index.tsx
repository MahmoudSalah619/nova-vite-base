import { useState } from "react";
import { Drawer } from "antd";
import styles from "./styles.module.scss";
import FilterPopover from "../../Molecules/FilterPopover";
import Button from "../../Atoms/Button";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

function FilterOrganism() {
  const { t } = useAutoCompleteTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <main>
      <Button onClick={toggleDrawer} title="Filters" />

      <Drawer
        title={t("Filter")}
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        className={styles.drawer}
        width={480}
      >
        <FilterPopover toggleDrawer={toggleDrawer} />
      </Drawer>
    </main>
  );
}

export default FilterOrganism;
