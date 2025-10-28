import { ReactNode } from "react";
import { Layout } from "antd";
import styles from "./styles.module.scss";
import SidebarOrganism from "../../Organisms/SidebarOrganism";
import NavbarOrganism from "../../Organisms/NavbarOrganism";
import { ToastContainer } from "react-toastify";
import WhiteSuccessIcon from "@/src/assets/icons/home/white-success-icon.svg";
import Image from "../../Atoms/Image";
import "react-toastify/dist/ReactToastify.css";

const { Header, Content } = Layout;

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <div className={styles.siderStyle}>
        <SidebarOrganism />
      </div>
      <Layout className={styles.mainContainer}>
        <Header className={styles.headerStyle}>
          <NavbarOrganism />
        </Header>

        <Content className={styles.contentStyle}>{children}</Content>

        <ToastContainer
          closeButton={true}
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
          icon={({ type }) => {
            switch (type) {
              case "success":
                return (
                  <Image
                    src={WhiteSuccessIcon}
                    alt="success-icon"
                    width={20}
                    height={20}
                  />
                );
              default:
                return null;
            }
          }}
        />
      </Layout>
    </Layout>
  );
}
