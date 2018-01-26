class Logger {
  defaultError(msg) {
    console.error('Arctrack failed with the following error: ', msg);
  }
  methodFailed(method, msg, callback) {
    const callbackMsg = callback ? `while trying to execute your callback: ${callback}` : '';
    console.error(`${method} failed ${callbackMsg}, with the following error`, msg);
  }
}

export default new Logger();
