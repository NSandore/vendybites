module.exports = {
  apps: [
    {
      name: "vendybites",
      script: "npm",
      args: "start",
      cwd: "/home/nick/services/vendybites",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        MAILGUN_DOMAIN: "mg.vendybites.com",
        MAILGUN_API_KEY: process.env.MAILGUN_API_KEY || "",
	MAILGUN_TO: "ct.lopsan@gmail.com",
        MAILGUN_FROM: "VendyBites <hello@mg.vendybites.com>",
        MAILGUN_REGION: "us",
        MAILGUN_REPLY_TO: "ct.lopsan@gmail.com",
        AUTORESPONDER: "true",
      },
    },
  ],
};
