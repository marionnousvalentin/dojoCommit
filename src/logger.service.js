const privateLoggerService = input => {
  console.error("privateLoggerService", { input });
};

const configParams = input => {
  console.log("privateLoggerSdedeervice", { input });
  return input;
};
module.exports = { privateLoggerService, configParams };
