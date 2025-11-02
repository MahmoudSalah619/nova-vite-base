import PageHeader from "../../Molecules/PageHeader";
import AssignedProjects from "../AssignedProjects";
import DetailsScreenOrganism from "../DetailsScreenOrganism";
import {
  DetailsScreenCells,
  DetailsScreenSection,
} from "../DetailsScreenOrganism/types";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import StatusMolecule from "../../Molecules/StatusMolecule";
import Button from "../../Atoms/Button";
import ModalOrganism from "../ModalOrganism";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { useState } from "react";
import Icon from "../../Atoms/Icon";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IUserDetails, userDetailsSchema } from "./types";
import { STATUS_ID } from "@/constants/Status";

function UserDetailsOrganism() {
  const { t } = useAutoCompleteTranslation();
  const [searchParams] = useSearchParams();
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IUserDetails>({
    defaultValues: {
      userId: 1,
      firstName: "Mahmoud",
      lastName: "Salah",
      title: "Engineer",
      email: "mahmoudsalah@gmail.com",
      phoneNumber: "201000000000",
    },
  });
  const [isVisible, setIsVisible] = useState(false);

  const detailsScreenCells: DetailsScreenCells<IUserDetails> = {
    firstName: {
      label: "FIRST_NAME",
      isEditable: true,
    },
    lastName: {
      label: "LAST_NAME",
      isEditable: true,
    },
    title: {
      label: "TITLE",
      isEditable: true,
    },
    email: {
      label: "EMAIL",
      className: styles.largeCellStyle,
      isEditable: true,
    },
    phoneNumber: {
      label: "PHONE_NUMBER",
      isEditable: true,
    },
  };

  const detailsScreenSections: DetailsScreenSection<IUserDetails>[] = [
    {
      rows: [
        {
          className: styles.customRowStyle,
          cells: ["firstName", "lastName", "title", "email", "phoneNumber"],
        },
      ],
    },
  ];

  const handleCancelModal = () => {
    setIsVisible(false);
  };
  return (
    <main className={styles.container}>
      <PageHeader
        title={searchParams.get("queryTitles")?.split(",")?.[0] ?? ""}
        canGoBack
        subtitleContent={
          <div className={styles.subtitleContainer}>
            <Text variant="P7" i18nText="USER" />
            <StatusMolecule
              statusId={STATUS_ID.COMPLETED}
              i18StatusText="ACTIVE"
            />
          </div>
        }
      >
        <Button
          variant="secondary"
          prefixIcon="closeRed"
          prefixIconSize={10}
          fontColor="danger700"
          title="USER_DEACTIVATION"
          onClick={() => setIsVisible(true)}
        />
      </PageHeader>

      <DetailsScreenOrganism
        className={styles.detailsScreenContainer}
        title="SUMMARY"
        initialData={getValues()}
        cells={detailsScreenCells}
        sections={detailsScreenSections}
        editBtnText="EDIT_USER_ACCOUNT"
        editable
        control={control}
        handleSubmit={handleSubmit}
        onEdit={(data) => console.error(data)}
        errors={errors}
        validationRules={userDetailsSchema}
      />

      <AssignedProjects />

      <ModalOrganism
        title={t("USER_DEACTIVATION")}
        isVisible={isVisible}
        onCancel={handleCancelModal}
        prefix={
          <div className={styles.iconContainer}>
            <Icon name="warning" width={17} height={15} />
          </div>
        }
      >
        <Text
          variant="P3"
          color="text100"
          className={styles.message}
          i18nText="ARE_SURE_FOR_THIS_ACTION"
        />
        <div className={styles.buttonContainer}>
          <Button
            variant="secondary"
            onClick={handleCancelModal}
            title="CANCEL"
          />
          <Button
            variant="primary"
            onClick={handleCancelModal}
            title="SUBMIT"
          />
        </div>
      </ModalOrganism>
    </main>
  );
}

export default UserDetailsOrganism;
