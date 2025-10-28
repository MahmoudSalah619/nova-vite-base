import { useState } from "react";
import PageHeader from "../../Molecules/PageHeader";
import ResourcesTabelOrganism from "../../Organisms/ResourcesTabelOrganism";
import styles from "./styles.module.scss";
import ModalOrganism from "../../Organisms/ModalOrganism";
import Button from "../../Atoms/Button";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Icon from "../../Atoms/Icon";
import showSuccessMsg from "@/utils/showSuccessMsg";
import { addNewResourceSchema, IAddNewResource } from "./types";
import { useForm } from "react-hook-form";
import ControlledInput from "@components/Molecules/ControlledInput";

export default function Resources() {
  const { t } = useAutoCompleteTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddNewResource>();

  const handleCancelModal = () => {
    setIsVisible(false);
  };

  const handleSubmitBtn = () => {
    setIsVisible(false);

    showSuccessMsg({
      msg: "The application has been sent to the administration for review",
    });
  };

  const CategoryOptions = [
    {
      id: 1,
      value: 1,
      label: "Category #1",
    },
    {
      id: 2,
      value: 2,
      label: "Category #2",
    },
    {
      id: 3,
      value: 3,
      label: "Category #3",
    },
    {
      id: 4,
      value: 4,
      label: "Category #4",
    },
  ];

  const TradeOptions = [
    {
      id: 1,
      value: 1,
      label: "option #1",
    },
    {
      id: 2,
      value: 2,
      label: "option #2",
    },
    {
      id: 3,
      value: 3,
      label: "option #3",
    },
    {
      id: 4,
      value: 4,
      label: "option #4",
    },
  ];

  return (
    <main className={styles.pageContainer}>
      <PageHeader i18nTitle="RESOURCES">
        <Button
          title="ADD_RESOURCE"
          onClick={() => setIsVisible(true)}
          prefixIcon="add"
        />
      </PageHeader>

      <ResourcesTabelOrganism />

      <ModalOrganism
        prefix={<Icon name="addBlack" size={16} />}
        title={t("ADD_NEW_RESOURCE")}
        isVisible={isVisible}
        onCancel={handleCancelModal}
      >
        <form
          className={styles.modalContent}
          onSubmit={handleSubmit(handleSubmitBtn)}
        >
          <ControlledInput
            required
            control={control}
            name="resourceName"
            i18nLabel="ADD_RESOURCE_NAME"
            i18nPlaceholder="RESOURCE_NAME"
            fullWidth
            type="text"
            size="large"
            validationRules={addNewResourceSchema?.resourceName}
            errorMsg={errors?.resourceName?.message}
          />
          <ControlledInput
            control={control}
            type="dropdown"
            name="category"
            i18nPlaceholder="SELECT_CATEGORY"
            i18nLabel="CATEGORY"
            fullWidth
            size="large"
            options={CategoryOptions}
            validationRules={addNewResourceSchema?.category}
            errorMsg={errors?.category?.message}
          />
          <ControlledInput
            control={control}
            type="dropdown"
            name="trade"
            prefixIcon="searchNormal"
            prefixIconSize={20}
            i18nPlaceholder="SELECT_TRADE"
            i18nLabel="TRADE"
            showSearch
            options={TradeOptions}
            validationRules={addNewResourceSchema?.trade}
            errorMsg={errors?.trade?.message}
            fullWidth
            size="large"
          />
          <div className={styles.inputsContainer}>
            <ControlledInput
              control={control}
              fullWidth
              type="text"
              size="large"
              name="resourceCode"
              i18nLabel="RESOURCE_CODE"
              i18nPlaceholder="RESOURCE_CODE"
              validationRules={addNewResourceSchema?.resourceCode}
              errorMsg={errors?.resourceCode?.message}
            />
            <ControlledInput
              control={control}
              type="text"
              name="position"
              i18nLabel="POSITION"
              fullWidth
              size="large"
              i18nPlaceholder="POSITION"
              validationRules={addNewResourceSchema?.position}
              errorMsg={errors?.position?.message}
            />
          </div>
          <div className={styles.btnsContainer}>
            <Button
              className={styles.btnContainer}
              title="CANCEL"
              variant="secondary"
              onClick={handleCancelModal}
              type="button"
            />
            <Button
              className={styles.btnContainer}
              title="SUBMIT"
              variant="primary"
              type="submit"
            />
          </div>
        </form>
      </ModalOrganism>
    </main>
  );
}
