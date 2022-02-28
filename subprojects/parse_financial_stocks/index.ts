import axios from "axios"
import fs from "fs"

interface MarketSymbol {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  adjusted_close: number;
  volume: number;
}

class Parser {
  constructor (private api_key: string) {

  }

  async historical_values (symbol: string) {
    const url = `https://eodhistoricaldata.com/api/eod/${symbol}?api_token=${this.api_key}&period=d&fmt=json`;
    const response = await axios.get(url);

    const stringifiedData = JSON.stringify(response.data);

    fs.writeFile(`./subprojects/parse_financial_stocks/${symbol}.json`, stringifiedData, (err: any) => {
      if (err) {
        console.log(err)
      }

      console.log("File written successfully\n");
    })
  }
}

async function main () {
  const parser = new Parser("621c7ba1d67437.83853199")
  parser.historical_values("AAPL.US")
}


main()
