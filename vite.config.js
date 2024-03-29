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
        "e0364d43a4msh9f644f667a1df37p168503jsnad551fd2695a"
      ),
      // "process.env.YOUR_BOOLEAN_VARIABLE": env.YOUR_BOOLEAN_VARIABLE,
      // If you want to exposes all env variables, which is not recommended
      // 'process.env': env
    },
  };
});
