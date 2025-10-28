import Button from "@/src/components/Atoms/Button";
import Text from "@/src/components/Atoms/Text";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useResetPasswordMutation } from "@apis/services/auth";
import handleErrors from "@/utils/handleErrors";
import ModalOrganism from "../ModalOrganism";
import { useState } from "react";
import Icon from "@components/Atoms/Icon";
import PasswordCriteriaMolecule from "@components/Molecules/PasswordCriteriaMolecule";
import { changePasswordSchema, IChangePassword } from "./types";
import ControlledInput from "@components/Molecules/ControlledInput";

export default function ChangPasswordOrganism() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>({
    defaultValues: {
      email: location.state?.email,
      otp: location.state?.otp,
    },
  });

  const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
    // @ts-ignore
    delete data.confirmPassword;

    try {
      await resetPassword(data).unwrap();
      setIsVisible(true);
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleModalClose = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <Text i18nText="forget_password_title" variant="H7" />

        <Text i18nText="forget_password_subtitle" variant="P7" />
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          name="new_password"
          i18nLabel="Enter_New_Password"
          type="password"
          size="large"
          validationRules={changePasswordSchema.new_password}
          errorMsg={errors.new_password?.message}
        />

        <div className={styles.passordCriteriaContianer}>
          <PasswordCriteriaMolecule
            value={watch("new_password")}
            title="Capital_Letter"
          />
          <PasswordCriteriaMolecule
            value={watch("new_password")}
            title="Small_Letter"
          />
          <PasswordCriteriaMolecule
            value={watch("new_password")}
            title="Number"
          />
          <PasswordCriteriaMolecule
            value={watch("new_password")}
            title="Special_Symbol"
          />
        </div>

        <ControlledInput
          control={control}
          name="confirmPassword"
          i18nLabel="Confirm_Password"
          size="large"
          type="password"
          validationRules={changePasswordSchema.confirmPassword}
          errorMsg={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          title="update_password"
          isFullWidth
          className={styles.updatePasswordBtn}
          disabled={isLoading}
        />
      </form>

      <ModalOrganism
        isVisible={isVisible}
        onCancel={handleModalClose}
        title="Congratulations!"
        prefix={<Icon name="homeGreenSuccessIcon" size={32} />}
      >
        <div className={styles.modalBody}>
          <Text i18nText="PASSWORD_UPDATED" variant="P3" />
        </div>
      </ModalOrganism>
    </div>
  );
}
