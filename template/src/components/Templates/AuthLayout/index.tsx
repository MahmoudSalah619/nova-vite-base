import { Layout } from "antd";
import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Text from "../../Atoms/Text";
import { TranslationKeyEnum } from "@/types/TranslationKeyEnum";
import COLORS from "@/constants/COLORS";
import { ToastContainer } from "react-toastify";
import Logo from "@components/Atoms/Logo";

function AuthLayout({
  children,
  formTitle,
  layoutText,
}: {
  children: ReactNode;
  formTitle?: TranslationKeyEnum;
  layoutText?: TranslationKeyEnum;
}) {
  return (
    <Layout
      style={{ backgroundColor: "#fff", height: "100%", minHeight: "100vh" }}
    >
      <div className={`${styles.container}`}>
        <div className={styles.layoutSidePanel}>
          <div className={styles.upperSidePanel}>
            <Logo />
            {layoutText && (
              <Text
                className={styles.layoutText}
                i18nText={layoutText}
                variant="H3"
                color="text300"
              />
            )}
          </div>
          <div className={styles.lowerSidePanel}>
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="0,0 100,0 22,43" fill={COLORS.primary400} />
            </svg>
          </div>
        </div>

        <div className={styles.layoutContent}>
          {formTitle && (
            <Text
              className={styles.formTitle}
              i18nText={formTitle}
              variant="H3"
              color="text50"
            />
          )}
          {children}

          <ToastContainer
            closeButton={false}
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </Layout>
  );
}

export default AuthLayout;
