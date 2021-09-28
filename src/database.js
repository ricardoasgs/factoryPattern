function createDatabaseConnection() {
  function start() {
    console.log("> [database] Starting...");
    console.log("> [database] Connecting to Mongo...");
    console.log("> [database] Running migrations...");
    console.log("> [database] Starting done!");
  }

  function stop() {
    console.log("> [database] Stopping...");
    console.log("> [database] closing connection...");
    console.log("> [database] Stopping done!");
  }

  return {
    start,
    stop,
  };
}

export default createDatabaseConnection;
