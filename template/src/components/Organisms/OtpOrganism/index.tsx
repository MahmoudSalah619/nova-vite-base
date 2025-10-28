import { Input } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Text from "@/src/components/Atoms/Text";
import styles from "./styles.module.scss";
import Button from "@/src/components/Atoms/Button";
import {
  useCheckResetOtpMutation,
  useGetResetOtpMutation,
} from "@apis/services/auth";
import handleErrors from "@/utils/handleErrors";
import showAuthToast from "@/utils/showAuthToast";
import { IOtp, otpSchema } from "./types";

export default function OtpOrganism() {
  const location = useLocation();
  const navigate = useNavigate();

  const [checkResetOtp, { isLoading }] = useCheckResetOtpMutation();

  const [getResetOtp] = useGetResetOtpMutation();

  const otpContainerStyle = {
    columnGap: 16,
    width: 328,
    height: 57,
    marginBottom: 20,
    justifyContent: "center",
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IOtp>({
    defaultValues: {
      email: location.state?.email,
      otp: "",
    },
  });

  const onSubmit: SubmitHandler<IOtp> = async (data) => {
    try {
      await checkResetOtp(data).unwrap();

      navigate("/change-password", {
        state: data,
      });
    } catch (error) {
      handleErrors(error);
    }
  };

  const handleResendOtp = async () => {
    try {
      await getResetOtp({ email: location.state?.email }).unwrap();

      showAuthToast({ title: "OTP Sent!" });
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <div className={styles.container}>
      <Text
        variant="H7"
        className={styles.introTitle}
        i18nText="authentication_code_title"
      />
      <Text
        variant="P7"
        className={styles.introText}
        i18nText="authentication_code_message"
      />

      <Text variant="L1" className={styles.label} i18nText="ENTER_OTP" />

      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="otp"
          control={control}
          rules={otpSchema.otp}
          render={({ field }) => (
            <Input.OTP
              value={field.value}
              onInput={(val) => field.onChange(val.join(""))}
              length={4}
              className={styles.otpInput}
              type="number"
              size="large"
              status={errors.otp ? "error" : ""}
              style={otpContainerStyle}
            />
          )}
        />

        <div className={styles.btnContainer}>
          <Button
            title="VERIFY"
            type="submit"
            isFullWidth
            disabled={!isValid || isLoading}
            size="large"
          />
        </div>
        <div className={styles.textbtnContainer}>
          <Text variant="P7" i18nText="NO_CODE_SENT" />
          <Button
            type="button"
            title="RESEND"
            size="small"
            fontColor="primary400"
            variant="noStyle"
            fontVariant="P8"
            onClick={handleResendOtp}
          />
        </div>
      </form>
    </div>
  );
}
