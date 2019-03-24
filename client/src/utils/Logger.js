import { createLogger } from 'winston';
import BrowserConsole from './BrowserConsoleTransport';

export class Logger {

  constructor() {
    this.logger = createLogger({
      level: 'info',
    });

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(new BrowserConsole({
        level: 'info',
      }));
    }
  }

  log(msg) {
    this.logger.info(msg);
  }
}

const logger = new Logger();

export default logger;
