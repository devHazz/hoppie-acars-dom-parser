import { ACARSDataInterface } from '../interfaces/hoppie'
const acarsSumUp: ACARSDataInterface[] = [];

export function filter(filter: string, acarsdata: Array<object>): Array<ACARSDataInterface>
{
filter = filter.toLowerCase();
if(filter.length > 0 && acarsdata)
{
    switch(filter) 
    {
        case "telex": {
            for(const row of acarsdata)
            {
                if(row["type"] === "progress" || row["type"] === "ads-c" || row["type"] === "datareq" || row["type"] === "cpdlc" || row["type"] === "inforeq")
                {
                    continue;
                }
                acarsSumUp.push({
                    msgNo: row["msgNo"],
                    from: row["from"],
                    to: row["to"],
                    type: row["type"],
                    received: row["received"],
                    relayed: row["relayed"]
                })
            }
        }
        break;

        case "cpdlc": {

        }


    }
    return acarsSumUp;
}
else
{

}

}