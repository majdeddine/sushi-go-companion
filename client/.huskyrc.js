const tasks = arr => arr.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": tasks(["yarn prettier"]),
    "pre-push": tasks(["yarn lint", "yarn test"]),
  },
};
