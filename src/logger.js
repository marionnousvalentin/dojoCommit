const { privateLoggerService } = require("./logger.service");

const privateLogger = input => {
  console.log("given input", { input });
  privateLoggerService(`call service ${input}`);
};

module.exports = { privateLogger };
