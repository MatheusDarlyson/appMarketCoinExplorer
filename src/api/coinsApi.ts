import axios from "axios";
import { MarketCoin, CoinDetails } from "../types";

const BASE_URL = "https://api.coingecko.com/api/v3"; // URL base da API CoinGecko

export async function getMarketCoins(): Promise<MarketCoin[]> { // busca as moedas do mercado
  const response = await axios.get(
    `${BASE_URL}/coins/markets`,
    {
      params: { // parâmetros da requisição
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: false,
      },
    }
  );

  return response.data;
}

export async function getCoinDetails(id: string): Promise<CoinDetails> { // busca os detalhes de uma moeda
  const response = await axios.get(`${BASE_URL}/coins/${id}`);
  return response.data;
}


export const coinsApi = {
  getMarketCoins,
  getCoinDetails,
};