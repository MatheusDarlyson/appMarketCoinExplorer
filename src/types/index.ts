export interface MarketCoin { // moedas na tela principal (lista de moedas)
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap_rank: number;
}

// detalhes completos de uma moeda (tela de detalhes)

export interface CoinDetails {
    id: string;
    symbol: string;
    name: string;
    description: { // descrição em diferentes idiomas
        en: string;
        pt: string;
    };
    image: { // imagens em diferentes tamanhos
        small: string;
        large: string;
    };
    market_data: { // dados de mercado em dolar e real
        current_price: {
            usd: number;
            brl: number;
        };
        price_change_percentage_24h: number;
        market_cap_rank: {
            usd: number;
            brl: number;
        };
    };
    }   
