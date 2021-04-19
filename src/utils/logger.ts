  export enum LogType {
      DEBUG = 'DEBUG',
      INFO = 'INFO',
      ERROR = 'ERROR', 
  }
  export function log(entry: any, type: LogType) {
    
      let now = new Date(Date.now());
      let parsed = now.toDateString() + ' >> ' + entry + ' ' + ' >> ' + type
      return console.log(parsed);
  }
  