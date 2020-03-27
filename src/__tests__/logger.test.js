const { privateLogger } = require("../logger");

const consoleSpy = jest.spyOn(console, "log");
describe("[Methode] logger", () => {
  it("should call console log", () => {
    privateLogger("hello");
    expect(consoleSpy).toHaveBeenCalledWith("given input", { input: "hello" });
  });
});
