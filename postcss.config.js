import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
// import config from "./tailwind.config.js";

/** @type {import('postcss-load-config').Config} */
const config = {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	plugins: [tailwind(), autoprefixer()]
};

export default config;
