function createWebserver() {
  function start() {
    console.log("> [webserver] Starting...");
    console.log("> [webserver] Wait for port...");
    console.log("> [webserver] Starting done!");
  }

  function stop() {
    console.log("> [webserver] Stopping...");
    console.log("> [webserver] gracefully waiting for all clients...");
    console.log("> [webserver] closing all ports...");
    console.log("> [webserver] Stopping done!");
  }

  return {
    start,
    stop,
  };
}
export default createWebserver;
