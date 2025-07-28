module.exports = {   
    requireConfig: "ignored",
    onboarding: false,
    platform: "github",
    repositories: ["Rayahhhmed/bazel-third-party-patch-build"],
    persistRepoData: true,
    baseBranches: ["main"],
    addLabels: ["renovate"],
    branchConcurrentLimit: 0,
    prConcurrentLimit: 0,
    prHourlyLimit: 0,
    enabledManagers: ["bazel", "bazel-module"],
    includePaths: [
      "MODULE.bazel",
      "WORKSPACE",
    ],
    ignorePaths: [
      "**/node_modules/**",
      "**/bazel-*/**",
    ],
    "bazel": {
        fileMatch: [
          "(^|/)WORKSPACE(|\\.bazel|\\.bzlmod)$",
          "\\.WORKSPACE\\.bazel$",
          "\\.bzl$",
          "\\.MODULE\\.bazel$",
          "(^|/)MODULE\\.bazel$",
          "(^|/).*\\.MODULE\\.bazel$"
        ],
      },
      "bazel-module": {
        fileMatch: [
          "\\.MODULE\\.bazel$",
          "(^|/)MODULE\\.bazel$",
          "(^|/).*\\.MODULE\\.bazel$"
        ],
      },
  }