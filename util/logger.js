class Logger {
  defaultError(msg) {
    console.error(`Arctrack constructor failed with the following error: `, msg);
  }
  methodFailed(method, msg, callback) {
    const callbackMsg = callback ? `while trying to execute your callback: ${callback}` : '';
    console.error(`Arctrack#${method} failed ${callbackMsg}, with the following error`, msg);
  }
}

module.exports = new Logger();