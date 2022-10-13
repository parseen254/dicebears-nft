const withTM = require("next-transpile-modules")(["blockchain"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["avatars.dicebear.com"],
  },
});
