module.exports = {
  types: [
    {
      value: "feat",
      name: "feat: A new feature",
    },
    {
      value: "fix",
      name: "fix: A bug fix",
    },
    {
      value: "docs",
      name: "docs: Documentation only changes",
    },
    {
      value: "refactor",
      name: "refactor: A code change that neither fixes a bug nor adds a feature",
    },
    {
      value: "perf",
      name: "perf: Performance improvements",
    },
    {
      value: "test",
      name: "test: Adding missing tests",
    },
    {
      value: "chore",
      name:
        "chore: Changes to the build process or auxiliary tools\n" +
        "         and libraries such as documentation generation",
    },
    {
      value: "revert",
      name: "revert: Revert to a commit",
    },
    {
      value: "release",
      name: "release: Publish a new version of a package.",
    },
  ],
  allowBreakingChanges: ["feat", "fix", "chore", "refactor"],
  skipQuestions: ["scope", "body", "footer"],
  appendBranchNameToCommitMessage: false,
};
