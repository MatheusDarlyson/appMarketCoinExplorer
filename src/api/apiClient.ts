import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.coingecko.com/api/v3", //Uso da URL base da API CoinGecko
    timeout: 10000,
});

export default apiClient;