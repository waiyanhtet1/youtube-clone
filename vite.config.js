import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "process.env.REACT_APP_RAPID_API_KEY": JSON.stringify(
        "a0f4c6405fmshd3b3dcfb41f5e24p13aa23jsn35c605b18b51"
      ),
      // "process.env.YOUR_BOOLEAN_VARIABLE": env.YOUR_BOOLEAN_VARIABLE,
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
  };
});
