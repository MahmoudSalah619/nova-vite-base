import IPageWrapperProps from "./types";
import styles from "./styles.module.scss";
import { Spin } from "antd";

function PageWrapper({ children, className, isLoading }: IPageWrapperProps) {
  return (
    <main className={`${styles.pageWrapper}`}>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <Spin size="large" />
        </div>
      ) : (
        <div className={`${styles.pageContent} ${className}`}>{children}</div>
      )}
    </main>
  );
}

export default PageWrapper;
