import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function MainLayout({ children }: { children: ReactNode }) {
  // TODO: Enable authentication when ready
  // useAuth();

  return <div className={styles.mainContainer}>{children}</div>;
}
