// let logType: string = 'info';
// logType = 'warn';

// let logType: 'info';
// logType = 'warn';

type LogType = 'info' | 'warn' | 'error';

export function logger(type: LogType, message: string) {
  switch (type) {
    case 'info':
      console.log(`info: ${message}`);
      break;

    case 'warn':
      console.log(`warn: ${message}`);
      break;

    case 'error':
      console.log(`error: ${message}`);
      break;
  }
}

logger('error', 'log com error');
