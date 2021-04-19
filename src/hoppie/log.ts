import cheerio from 'cheerio';
import { ACARSDataInterface } from '../interfaces/hoppie'
import { Request } from '../utils/request';
import { log, LogType } from '../utils/logger';

export function GetCurrentLog(url: string): Promise<ACARSDataInterface[]>
{ 
const payload = Request(url, "GET")
  .then(
    res => {
        if(res && res.status === 200)
        {
            const body = res.data; 
            const $ = cheerio.load(body);
            const selectorTable = $('body > p > table > tbody > tr > td:nth-child(2) > p:nth-child(3) > table > tbody > tr');
            const acarsSumUp: ACARSDataInterface[] = [];
      
            selectorTable.each((i, element) => {
              const msgNo: number = parseInt($(element).find('td:nth-child(1) > a').text());
              if(isNaN(msgNo) || !(msgNo > 0))
              {
                  return; //Used as a continue for the heading column of the log table
                  //return false; used for break; Future reference
              } 
              const from: string = $(element).find('td:nth-child(2)').text(); 
              const to: string = $(element).find('td:nth-child(3)').text(); 
              const type: string = $(element).find('td:nth-child(4)').text();
              const received: string = $(element).find('td:nth-child(5)').text();
              const relayed: string = $(element).find('td:nth-child(6)').text().length > 0 ? $(element).find('td:nth-child(6)').text() : ' ';
              
              acarsSumUp.push({
                  msgNo,
                  from,
                  to,
                  type,
                  received,
                  relayed
              });
            });
              return acarsSumUp;
        }
    })
    return payload;
}