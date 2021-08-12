import SimpleContainer from "./simpleContainer";

describe("Test the Simple Ioc Container", () => {
  test("Test register and resolve!", () => {
    const container = new SimpleContainer();

    container.register("config", { key: "value" }, null);

    const instance = container.resolve("config");

    expect(instance.key === "value").toBe(true);
  });

  test("Test singleton and resolve!", () => {
    const container = new SimpleContainer();

    container.singleton("config", { key: "value" }, null);

    const instance = container.resolve("config");

    expect(instance.key === "value").toBe(true);
  });
});
