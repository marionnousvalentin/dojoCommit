const { privateLogger } = require("../logger");
const { privateLoggerService } = require("../logger.service");

jest.mock("../logger.service");
const consoleSpy = jest.spyOn(console, "log");
describe("[Methode] logger", () => {
  it("should call console log", () => {
    privateLogger("hello");
    expect(consoleSpy).toHaveBeenCalledWith("given input", { input: "hello" });
    expect(privateLoggerService).toHaveBeenCalledWith();
  });
});
