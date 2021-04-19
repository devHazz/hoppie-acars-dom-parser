import axios, { AxiosResponse } from "axios";
import { log, LogType } from "./logger";
export function Request(url: string, method: string): Promise<AxiosResponse>
{
    method = method.toLowerCase();
    if(method === 'get' || method === 'post' || method === 'put' )
    {
        let req;
        switch(method)
        {
            case 'get':
                req = axios.get(url)
                return req;
            break;

            case 'post':
                req = axios.post(url)
                return req;
            break;

            case 'put':
                req = axios.put(url);
                return req;
            break;
        }
    }
    
}