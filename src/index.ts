import axios from 'axios';
import cheerio from 'cheerio';
import { ACARSDataInterface } from './interfaces/hoppie'
import { filter } from './utils/filter';

const url = 'https://www.hoppie.nl/acars/system/log.html'; // URL we're scraping
const AxiosInstance = axios.create(); // Create a new Axios Instance

// This is the structure of the player data we recieve


AxiosInstance.get(url)
  .then(
    response => {
      const html = response.data; 
      const $ = cheerio.load(html);
      const selectorTable = $('body > p > table > tbody > tr > td:nth-child(2) > p:nth-child(3) > table > tbody > tr');
      const acarsSumUp: ACARSDataInterface[] = [];

      selectorTable.each((i, elem) => {
        const msgNo: number = parseInt($(elem).find('td:nth-child(1) > a').text());
        if(isNaN(msgNo))
        {
            return;
        } 
        const from: string = $(elem).find('td:nth-child(2)').text(); 
        const to: string = $(elem).find('td:nth-child(3)').text(); 
        const type: string = $(elem).find('td:nth-child(4)').text();
        const received: string = $(elem).find('td:nth-child(5)').text();
        const relayed: string = $(elem).find('td:nth-child(6)').text().length > 0 ? $(elem).find('td:nth-child(6)').text() : 'false';
        
        acarsSumUp.push(
        {
            msgNo,
            from,
            to,
            type,
            received,
            relayed
        },

        )
      });

      console.log(filter("telex", acarsSumUp));
    }
  )
  .catch(console.error); // Error handling