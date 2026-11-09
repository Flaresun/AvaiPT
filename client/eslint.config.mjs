// eslint-config-next ships a flat config array as of Next 16.
import next from "eslint-config-next";

const eslintConfig = [
  { ignores: [".next/**", "out/**", "build/**", "node_modules/**"] },
  ...next,
];

export default eslintConfig;
