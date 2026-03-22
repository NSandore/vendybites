module.exports = {
  apps: [
    {
      name: "vendybites",
      script: "npm",
      args: "start",
      cwd: "/home/nick/services/vendybites/.claude/worktrees/awesome-hofstadter",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },
    },
  ],
};
