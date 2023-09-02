require("dotenv").config()
const app = require('./app');

app.listen(process.env.PORT || 5050, () => {
  console.log('Server running on port ',process.env.PORT);
});