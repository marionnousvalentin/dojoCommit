const { privateLoggerService, configParams } = require("./logger.service");

const privateLogger = input => {
  const formatedInput = configParams(input);
  console.log("given input", formatedInput);
  privateLoggerService(`call service ${input}`);
};

module.exports = { privateLogger };
