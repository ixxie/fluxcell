/* eslint no-useless-constructor: 0 */
import Transport from 'winston-transport';

export default class BrowserConsole extends Transport {
  constructor(opts) {
    super(opts);
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });

    console.log(info.message);
    callback();
  }
}
