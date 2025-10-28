import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import iconList from "../../Atoms/Icon/list";
interface IContactInfoCardProps {
  iconName: keyof typeof iconList;
  title: TranslationKeyEnum;
  subtitle: string;
  description: string;
}

export default IContactInfoCardProps;
