import { useNavigate } from "react-router-dom";
import { Checkbox, CheckboxProps } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import Text from "@/src/components/Atoms/Text";
import Button from "@/src/components/Atoms/Button";
import HyperLink from "@/src/components/Atoms/HyperLink";
import styles from "./styles.module.scss";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import { ILogin, loginSchema } from "./types";
import ControlledInput from "@components/Molecules/ControlledInput";
import loginHandler from "@/utils/loginHandler";

export default function LoginOrganism() {
  const { t } = useAutoCompleteTranslation();
  const onChange: CheckboxProps["onChange"] = () => {};
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting: isLoginLoading },
  } = useForm<ILogin>();

  const onSubmit: SubmitHandler<ILogin> = async () => {
     loginHandler({
      token: "dummy_token",
      refreshToken: "dummy_refresh_token",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <Text i18nText="login_title" variant="H7" color="text50" />

        <Text i18nText="login_subtitle" variant="P7" color="text100" />
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          type="text"
          control={control}
          name="email"
          size="large"
          label="Email Address"
          validationRules={loginSchema?.email}
          errorMsg={errors.email?.message}
        />
        <div>
          <ControlledInput
            control={control}
            name="password"
            size="large"
            label="Password"
            type="password"
            validationRules={loginSchema?.password}
            errorMsg={errors.password?.message}
          />

          <div className={styles.rowContainer}>
            <Checkbox className={styles.checkboxStyle} onChange={onChange}>
              <Text variant="L1" color="text50" i18nText="remember_me" />
            </Checkbox>

            <HyperLink
              to="/forget-password"
              title={t("forgot_password")}
              fontVariant="L1"
              fontColor="text50"
            />
          </div>
        </div>

        <div className={styles.btnContainer}>
          <Button
            title="Login"
            isFullWidth
            type="submit"
            variant="primary"
            size="large"
            disabled={isLoginLoading}
          />
        </div>
      </form>
      <div className={styles.btnContainer} style={{ marginTop: "1rem" }}>
        <Button
          title="GO_SIGNUP"
          variant="secondary"
          isFullWidth
          size="large"
          onClick={() => navigate("/sign-up?slug=g34skds75sm5h")}
        />
      </div>
    </div>
  );
}
