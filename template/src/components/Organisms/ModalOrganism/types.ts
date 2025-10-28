import { ReactNode } from "react";

export interface ModalOrganismProps {
  children: ReactNode;
  isVisible: boolean;
  title: string;
  prefix?: ReactNode;
  onCancel?: () => void;
}
