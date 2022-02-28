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

class MarketParser {
  base_url = "https://eodhistoricaldata.com/api"

  constructor (private api_key: string) {}

  async historical_values (symbol: string): Promise<MarketSymbol[]> {
    const url = `${this.base_url}/eod/${symbol}`;
    const request_params = {
      api_token: this.api_key,
      period: "d",
      fmt: "json"
    }

    const response = await axios.get(url, {params: request_params});

    return response.data
  }
}

class FilesHandler {
  static write (file_name: string, data: string | { [key: string]: any }) {
    const stringifiedData = JSON.stringify(data);

    fs.writeFile(file_name, stringifiedData, (err: any) => {
      if (err) {
        console.log(err)
      }

      console.log("File written successfully\n");
    })
  }
}

async function main () {
  const parser = new MarketParser("621c7ba1d67437.83853199")
  const symbols = ["AAPL.US", "TSLA.US"]

  for await (const symbol of symbols) {
    const data = await parser.historical_values(symbol)
    FilesHandler.write(`./subprojects/parse_financial_stocks/${symbol}.json`, data)
  }
}

main()
