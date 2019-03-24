import moment from 'moment-timezone';

export const getLocalTime = time => moment.tz(time, 'Europe/Helsinki').format();
