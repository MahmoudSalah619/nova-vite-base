import Text from "../../Atoms/Text";
import styles from "./styles.module.scss";
import TableSelectionOptions from "@/constants/TableSelectionOptions";
import Button from "../../Atoms/Button";
import ModalOrganism from "../ModalOrganism";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardWrapper from "../../Wrappers/CardWrapper";
import Icon from "../../Atoms/Icon";
import { useForm } from "react-hook-form";
import { addNewUserSchema, IAddNewUser } from "./types";
import ControlledInput from "@components/Molecules/ControlledInput";

export default function AddNewUserOrganism() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddNewUser>();

  const handleSubmitBtn = () => {
    setIsVisible(true);
  };

  const handleCancelModal = () => {
    setIsVisible(false);
    navigate("/");
  };

  return (
    <CardWrapper className={styles.cardContainer}>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit(handleSubmitBtn)}
      >
        <ControlledInput
          required
          type="text"
          control={control}
          i18nLabel="USER_NAME"
          name="userName"
          size="large"
          i18nPlaceholder="USER_NAME"
          validationRules={addNewUserSchema?.userName}
          errorMsg={errors?.userName?.message}
        />
        <ControlledInput
          required
          type="text"
          size="large"
          control={control}
          i18nLabel="EMAIL"
          name="email"
          i18nPlaceholder="EMAIL"
          validationRules={addNewUserSchema?.email}
          errorMsg={errors?.email?.message}
        />
        <ControlledInput
          required
          type="phone"
          control={control}
          size="large"
          i18nLabel="PHOEN_NUMBER"
          name="phoneNumber"
          i18nPlaceholder="PHONE_NUMBER"
          validationRules={addNewUserSchema?.phoneNumber}
          errorMsg={errors?.phoneNumber?.message}
        />
        <ControlledInput
          required
          type="text"
          control={control}
          i18nLabel="JOB_TITLE"
          name="jobTitle"
          validationRules={addNewUserSchema?.jobTitle}
          size="large"
          errorMsg={errors?.jobTitle?.message}
        />
        <ControlledInput
          type="dropdown"
          required
          control={control}
          i18nLabel="USER_TYPE"
          name="userType"
          size="large"
          options={TableSelectionOptions.UserType}
          validationRules={addNewUserSchema?.userType}
          errorMsg={errors?.userType?.message}
        />
        <ControlledInput
          control={control}
          i18nLabel="ADDITIONAL_NOTES"
          name="additionalNotes"
          type="textarea"
          i18nPlaceholder="ADDITIONAL_NOTES"
          validationRules={addNewUserSchema?.additionalNotes}
          errorMsg={errors?.additionalNotes?.message}
          size="large"
        />
        <Button
          className={styles.btnContainer}
          title="SUBMIT"
          variant="primary"
          type="submit"
        />
      </form>

      <ModalOrganism
        title="Request Sent"
        isVisible={isVisible}
        onCancel={handleCancelModal}
        prefix={<Icon name="homeGreenSuccessIcon" size={32} />}
      >
        <Text
          variant="P3"
          color="text100"
          className={styles.message}
          i18nText="REQUEST_SENT_MESSAGE"
        />
      </ModalOrganism>
    </CardWrapper>
  );
}
