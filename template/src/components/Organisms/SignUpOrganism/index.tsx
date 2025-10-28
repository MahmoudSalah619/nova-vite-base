import { Auth } from "@/constants/Validation";
import Button from "@/src/components/Atoms/Button";
import Text from "@/src/components/Atoms/Text";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import loginHandler from "@/utils/loginHandler";
import { User } from "@/src/apis/types/auth";
import ControlledInput from "@components/Molecules/ControlledInput";

export default function SignUpOrganism() {
  const navigate = useNavigate();

  // const defaultValues = {
  //   fullName: "john doe",
  //   jobTitle: "developer",
  //   email: "example@test.com",
  //   phone: "01012345678",
  //   companyName: "example company",
  // };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Auth>({ mode: "all" });

  const onSubmit: SubmitHandler<Auth> = (data) => {
    const user_type = data.email === "admin@gmail.com" ? "admin" : "seller";
    const dummy_data = {
      user_type,
    };
    loginHandler({
      token: "skshdj36su3h77",
      data: dummy_data as User,
    });
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <Text i18nText="Complete_user_register" variant="H7" />

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          control={control}
          type="text"
          size="large"
          name="fullName"
          i18nLabel="Full_Name"
          // disabled
          errorMsg={errors.fullName?.message}
        />
        <ControlledInput
          type="text"
          control={control}
          size="large"
          name="jobTitle"
          i18nLabel="jobTitle"
          // disabled
          errorMsg={errors.jobTitle?.message}
        />
        <ControlledInput
          type="text"
          control={control}
          size="large"
          name="email"
          i18nLabel="email_address"
          errorMsg={errors.email?.message}
        />
        <ControlledInput
          control={control}
          type="phone"
          name="phone"
          i18nLabel="PHONE_NUMBER"
          i18nPlaceholder="MOBILE_NUMBER"
          errorMsg={errors.phone?.message}
        />
        <ControlledInput
          control={control}
          type="text"
          name="companyName"
          size="large"
          i18nLabel="COMPANY"
          // disabled
          errorMsg={errors.companyName?.message}
        />
        {/* <Input
          containerStyle={`${styles.input} ${styles.spaceTop}`}
          label="Enter_New_Password"
          type="password"
          inputStyle={styles.emailInput}
          status={errors.newPassword ? "error" : "default"}
          reactHookFormProps={{
            ...register("newPassword", ValidationSchema.NewPassword),
            }}
            errorMsg={errors.newPassword?.message}
            /> */}
        <ControlledInput
          control={control}
          name="password"
          label="Password"
          size="large"
          type="password"
          errorMsg={errors.password?.message}
        />

        <ControlledInput
          control={control}
          name="confirmPassword"
          i18nLabel="Re_password"
          type="password"
          size="large"
          errorMsg={errors.confirmPassword?.message}
        />
        {/* Buttton */}

        <div className={styles.btnContainer}>
          <Button title="sign_up_button" isFullWidth type="submit" />
        </div>
      </form>
    </div>
  );
}
