import { useSearchParams } from "react-router-dom";
import Button from "../../Atoms/Button";
import PageHeader from "../../Molecules/PageHeader";
import styles from "./styles.module.scss";
import { OptionType } from "@components/Molecules/Input/SelectionInput/types";
import { Input } from "@components/Molecules/Input";

function ProductsExportSelectorOrganism() {
  const [searchParams, setSearchParams] = useSearchParams();

  const options: OptionType[] = [
    { value: "all", label: "All" },
    { value: "ca11", label: "CA11" },
    { value: "ca15", label: "CA15" },
    { value: "cb12", label: "CB12" },
  ];

  const handleChange = (value: string) => {
    searchParams.set("warehouse", value);
    setSearchParams(searchParams);
  };

  return (
    <section className={styles.sectionContainer}>
      <PageHeader i18nTitle="INVETORY">
        <Button variant="secondary" prefixIcon="exportIcon" title="EXPORT" />
      </PageHeader>

      <Input
        className={styles.selectionInput}
        type="dropdown"
        i18nLabel="SELECT_WAREHOUSES"
        required
        options={options}
        onChange={(value) => handleChange(value as string)}
      />
    </section>
  );
}

export default ProductsExportSelectorOrganism;
