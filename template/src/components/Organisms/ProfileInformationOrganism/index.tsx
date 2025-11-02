import { Input } from "@components/Molecules/Input";
import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import CardWrapper from "../../Wrappers/CardWrapper";
import styles from "./styles.module.scss";

interface IPersonalInfo {
  fullName: string;
  jobTitle: string;
  emailAddress: string;
  mobileNumber: string;
  company: string;
  password: string;
}

function ProfileInformationOrganism() {
  const defaultValues: IPersonalInfo = {
    fullName: "mahmoud salah Mahmoud",
    jobTitle: "Engineer",
    emailAddress: "minaayman@gmail.com",
    mobileNumber: "+201288153092",
    company: "Bit68 company",
    password: "password",
  };

  return (
    <CardWrapper className={styles.profileInformationCard}>
      <div className={styles.profileInfoHeader}>
        <Text i18nText="PERSONAL_INFO" variant="P1" />
        <Button prefixIcon="editIcon" title="EDIT_INFO" variant="secondary" />
      </div>

      <form className={styles.inputsContainer}>
        <Input
          name="fullName"
          i18nLabel="FULL_NAME"
          i18nPlaceholder="FULL_NAME"
          type="text"
          size="large"
          defaultValue={defaultValues.fullName}
        />
        <Input
          type="text"
          name="jobTitle"
          size="large"
          i18nLabel="JOB_TITLE"
          i18nPlaceholder="JOB_TITLE"
          defaultValue={defaultValues.jobTitle}
        />
        <Input
          type="text"
          i18nLabel="EMAIL_ADDRESS"
          size="large"
          i18nPlaceholder="EMAIL_ADDRESS"
          defaultValue={defaultValues.emailAddress}
          disabled={true}
        />
        <Input type="phone" value="+201288153092" onChange={() => {}} />
        <Input
          type="text"
          size="large"
          i18nLabel="COMPANY"
          i18nPlaceholder="COMPANY"
          defaultValue={defaultValues.company}
          disabled={true}
        />
        <Input
          type="password"
          name="password"
          i18nLabel="PASSWORD"
          size="large"
          i18nPlaceholder="PASSWORD"
          defaultValue={defaultValues.password}
        />
      </form>
    </CardWrapper>
  );
}

export default ProfileInformationOrganism;
