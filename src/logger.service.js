const privateLoggerService = input => {
  console.log("privateLoggerService", { input });
};

const configParams = input => {
  console.log("privateLoggerSdedeervice", { input });
  return input;
};
module.exports = { privateLoggerService, configParams };
