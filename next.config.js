const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  serverRuntimeConfig: {
    mySecret: "secret",
  },
  publicRuntimeConfig: {
    message: "notice how serverRuntimeConfig is empty",
  },
};
