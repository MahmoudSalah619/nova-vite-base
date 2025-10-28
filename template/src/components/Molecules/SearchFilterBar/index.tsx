import { useSearchParams } from "react-router-dom";
import { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import { Input } from "../Input";

function SearchFilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const dummyOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("search", e.target.value);
      return newParams;
    });
  };

  const handleCategoryChange = (value: string | string[] | undefined) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value && typeof value === "string") newParams.set("category", value);
      else newParams.delete("category");
      return newParams;
    });
  };

  const handleDateCreatedChange = (value: string | string[] | undefined) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value && typeof value === "string")
        newParams.set("dateCreated", value);
      else newParams.delete("dateCreated");
      return newParams;
    });
  };

  const handleDatePublishedChange = (value: string | string[] | undefined) => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (value && typeof value === "string")
        newParams.set("datePublished", value);
      else newParams.delete("datePublished");
      return newParams;
    });
  };

  return (
    <section className={styles.container}>
      <Input
        type="text"
        className={styles.searchInput}
        prefixIcon={"serachIcon"}
        placeholder="Search"
        onChange={handleSearchChange}
        value={searchParams.get("search") || ""}
      />

      <Input
        type="dropdown"
        className={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder="category_column"
        onChange={handleCategoryChange}
        value={searchParams.get("category")}
      />
      <Input
        type="dropdown"
        className={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder="Date Created"
        onChange={handleDateCreatedChange}
        value={searchParams.get("dateCreated")}
      />
      <Input
        type="dropdown"
        className={styles.selectionContainerInput}
        options={dummyOptions}
        placeholder="Date Published"
        onChange={handleDatePublishedChange}
        value={searchParams.get("datePublished")}
      />
    </section>
  );
}

export default SearchFilterBar;
