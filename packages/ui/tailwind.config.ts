import sharedConfig from "@repo/config-tailwind";

import type { Config } from "tailwindcss";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/components/**/react.tsx"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
