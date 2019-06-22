module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/config/testSetup.js"],
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/styles/*.js",
    "!src/**/index.js",
    "!src/**/*.stories.js",
    "!src/**/*.fixtures.js",
  ],
  coverageDirectory: "coverage-reports",
  coverageReporters: ["json", "lcov", "text", "clover", "html"],
  testMatch: ["<rootDir>/src/**/?(*.)+(spec|test).js?(x)"],
};
