import COLORS from "@/constants/COLORS";
import { IconProps } from "../../Atoms/Icon/types";

interface LinkProps {
  icon?: IconProps;
  label: string;
  className?: string;
  href: string;
  color?: keyof typeof COLORS;
  textVariant?: TextVariant;
  hasActiveStyle?: boolean;
  onClick?: () => void;
}
export interface SidebarLinkProps extends LinkProps {
  subLinks?: LinkProps[];
}
