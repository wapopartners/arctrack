class Logger {
  defaultError(msg) {
    console.error(`Arctrack constructor failed with the following error: `, msg);
  }
  callbackFailed(method, msg) {
    console.error(`Arctrack#${method} failed while trying to execute your callback: `, msg);
  }
}

module.exports = new Logger();