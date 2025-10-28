import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    Unfonts({
      custom: {
        families: [
          {
            name: "MontserratThin",
            src: "./src/assets/fonts/Montserrat-Thin.ttf",
          },
          {
            name: "MontserratExtraLight",
            src: "./src/assets/fonts/Montserrat-ExtraLight.ttf",
          },
          {
            name: "MontserratLight",
            src: "./src/assets/fonts/Montserrat-Light.ttf",
          },
          {
            name: "MontserratRegular",
            src: "./src/assets/fonts/Montserrat-Regular.ttf",
          },
          {
            name: "MontserratMedium",
            src: "./src/assets/fonts/Montserrat-Medium.ttf",
          },
          {
            name: "MontserratSemiBold",
            src: "./src/assets/fonts/Montserrat-SemiBold.ttf",
          },
          {
            name: "MontserratBold",
            src: "./src/assets/fonts/Montserrat-Bold.ttf",
          },
          {
            name: "MontserraExtraBold",
            src: "./src/assets/fonts/Montserrat-ExtraBold.ttf",
          },
          {
            name: "MontserratBlack",
            src: "./src/assets/fonts/Montserrat-Black.ttf",
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
