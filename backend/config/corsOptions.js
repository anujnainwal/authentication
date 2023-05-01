const whiteList = ["http://localhost:3001", "http://localhost:7000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      return callback(null, true);
    } else {
      return callback("Not Allowed by cors.");
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};
module.exports = corsOptions;
