import { useSearchParams } from "react-router-dom";
import styles from "./styles.module.scss";
import PageWrapper from "@components/Wrappers/PageWrapper";
import ProductDetailsOrganism from "@components/Organisms/ProductDetailsOrganism";
import PageHeader from "@components/Molecules/PageHeader";
import Text from "@components/Atoms/Text";

function ProductDetails() {
  const [searchParam] = useSearchParams();
  return (
    <PageWrapper className={styles.pageWrapper}>
      <PageHeader
        canGoBack
        title={searchParam.get("queryTitles") ?? ""}
        subtitleContent={<Text variant="P7" i18nText="BOOKABLE_RESOURCE" />}
      />
      <ProductDetailsOrganism />
    </PageWrapper>
  );
}

export default ProductDetails;
