import createCore from "../core";

function createMock() {
  function start() {
    console.log("[mock] testing...");
  }
  function stop() {
    console.log("[mock] testing...");
  }

  return {
    start,
    stop,
  };
}

describe("Core quando importado", () => {
  test("Deve ter o método start e stop", () => {
    const core = createCore();
    expect(core).toHaveProperty("start");
    expect(core).toHaveProperty("stop");
  });
});

describe("Core quando inicializado", () => {
  test("Não deve retornar erros", () => {
    const databaseMock = createMock();
    const webserverMock = createMock();
    const core = createCore({
      database: databaseMock,
      webserver: webserverMock,
    });
    expect(() => {
      core.start();
    }).not.toThrow();
  });
});
