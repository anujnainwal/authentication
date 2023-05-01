const config = require("../config/config");
const app = require("./app");

console.log("NODE_DEVELOPMENT: ", config.NODE_PRODUCTION);

app.listen(config.PORT, () => {
  console.log(`PORT: ${config.PORT}! \nLink: http://localhost:${config.PORT}`);
});
