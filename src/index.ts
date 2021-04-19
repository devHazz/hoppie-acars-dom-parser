import dotenv from 'dotenv';
dotenv.config();
import { filter } from "./hoppie/filter";
import { GetCurrentLog } from "./hoppie/log";

let url = process.env.LOG_URL
GetCurrentLog(url)
	.then(acarsLog => {
		console.log(filter("telex", acarsLog))
	})
