  export enum LogType {
      DEBUG = 'DEBUG',
      INFO = 'INFO',
      WARNING = 'WARNING',
      ERROR = 'ERROR', 
      VERBOSE = 'VERBOSE',
  }
  export function log(entry: any, type: LogType) {
    
      let now = new Date(Date.now());
      let parsed = now.toDateString() + ' >> ' + entry + ' ' + ' >> ' + type
      return console.log(parsed);
  }
  