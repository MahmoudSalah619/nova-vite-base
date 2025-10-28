import PageHeader from "../../Molecules/PageHeader";
import AddNewWorkOrderOrganism from "../../Organisms/AddNewWorkOrderOrganism";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";

export default function RequestAddNewWorkOrder() {
  return (
    <main className={styles.container}>
      <PageHeader i18nTitle="REQUEST_ADD_NEW_WORK_ORDER" canGoBack />

      <CardWrapper>
        <AddNewWorkOrderOrganism />
      </CardWrapper>
    </main>
  );
}
