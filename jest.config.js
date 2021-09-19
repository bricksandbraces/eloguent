module.exports = {
  verbose: true,
  preset: "ts-jest",
  projects: [
    {
      displayName: "@openbricksandbrackets/eloguent",
      globals: {
        "ts-jest": {
          tsconfig: "./tsconfig.jest.json"
        }
      },
      testMatch: ["<rootDir>/**/*?(*.)+(test).ts?(x)"],
      modulePathIgnorePatterns: ["<rootDir>/lib"],
      coveragePathIgnorePatterns: ["<rootDir>/lib"],
      transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "ts-jest"
      }
    }
  ]
};
