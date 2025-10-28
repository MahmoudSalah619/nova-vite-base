import { ReactNode } from "react";

interface IPageWrapperProps {
  children: ReactNode;
  isLoading?: boolean;
  className?: string;
}

export default IPageWrapperProps;
