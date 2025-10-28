import { ConfigProvider } from "antd";
import useGenerateRoutes from "../routes/useGenerateRoutes";
import MainLayout from "./components/Templates/MainLayout";
import { theme } from "./theme";

function App() {
  const routes = useGenerateRoutes();

  return (
    <ConfigProvider theme={theme}>
      <MainLayout>{routes}</MainLayout>
    </ConfigProvider>
  );
}

export default App;
