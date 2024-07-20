/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "(/tests/.*|(\\.|/)(tests))\\.ts?$",
  modulePathIgnorePatterns: ["./internal/", "./node_modules/"],
};
