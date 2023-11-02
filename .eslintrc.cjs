module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
