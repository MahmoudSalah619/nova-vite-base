import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";
import Text from "../../Atoms/Text";
import ContactInfoCard from "../../Molecules/ContactInfoCard";
import IContactInfoCardProps from "../../Molecules/ContactInfoCard/types";
import PageHeader from "../../Molecules/PageHeader";
import CardWrapper from "../../Wrappers/CardWrapper";
import PageWrapper from "../../Wrappers/PageWrapper";
import styles from "./styles.module.scss";

function Settings() {
  const { t } = useAutoCompleteTranslation();
  const contactList: IContactInfoCardProps[] = [
    {
      iconName: "settingsSms",
      title: "CHAT_TO_SUPPORT",
      subtitle: t("WERE_HERE_TO_HELP"),
      description: "MInaayman@gmail.com",
    },
    {
      iconName: "settingsLocation",
      title: "VISIT_US",
      subtitle: t("VISIT_OUT_OFFICE_HQ"),
      description: "View on Google Maps",
    },
    {
      iconName: "settingsCall",
      title: "CALL_US",
      subtitle: "Sat-tru from 8am to 5 pm",
      description: "+20 128 8153 092",
    },
  ];

  return (
    <PageWrapper className={styles.settingsPage}>
      <PageHeader i18nTitle="SUPPORT_SETTINGS" />

      <CardWrapper className={styles.contactContainer}>
        <Text variant="P1" i18nText="CONTACT_OUR_FRIENDLY_TEAM" />
        <div className={styles.contactList}>
          {contactList.map((item, index) => (
            <ContactInfoCard key={index} {...item} />
          ))}
        </div>
      </CardWrapper>
    </PageWrapper>
  );
}

export default Settings;
