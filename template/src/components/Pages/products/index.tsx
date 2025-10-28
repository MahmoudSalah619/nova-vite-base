import AllProductsOrganism from "../../Organisms/AllProductsOrganism";
import ProductsExportSelectorOrganism from "../../Organisms/ProductsExportSelectorOrganism";
import PageWrapper from "../../Wrappers/PageWrapper";
import styles from "./styles.module.scss";

function Products() {
  return (
    <PageWrapper className={styles.productsPageWrapper}>
      <ProductsExportSelectorOrganism />
      <AllProductsOrganism />
    </PageWrapper>
  );
}

export default Products;
