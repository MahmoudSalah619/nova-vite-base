import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import { useGetResetOtpMutation } from "@apis/services/auth";
import handleErrors from "@/utils/handleErrors";
import { forgotPasswordSchema, IForgotPassword } from "./types";
import ControlledInput from "@components/Molecules/ControlledInput";

export default function ForgetPasswordOrganism() {
  const navigate = useNavigate();
  const [getResetOtp, { isLoading }] = useGetResetOtpMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgotPassword>();

  const onSubmit: SubmitHandler<IForgotPassword> = async (data) => {
    try {
      await getResetOtp(data).unwrap();

      navigate("/email-validation", {
        state: {
          email: data.email,
        },
      });
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <Text variant="H7" i18nText="forget_password_title" />

        <Text
          variant="P7"
          i18nText="forget_password_subtitle"
          color="text100"
        />
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          type="text"
          size="large"
          name="email"
          label="Email Address"
          validationRules={forgotPasswordSchema.email}
          errorMsg={errors.email?.message}
        />

        <div className={styles.btnContainer}>
          <Button
            type="submit"
            title="Reset Password"
            isFullWidth
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
}
