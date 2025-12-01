
import { use, useEffect, useState } from "react";
import { MarketCoin } from "../types";
import { getMarketCoins } from "../api/coinsApi";

export function useFetchCoins() { // hook para buscar as moedas do mercado
    const [data, setData] = useState<MarketCoin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const loadCoins = async () => { // função para carregar as moedas
        try {
            setLoading(true);
            setError(null);


            const coins = await getMarketCoins(); // busca as moedas na api
            setData(coins);
        } catch (err) {
        setError("Erro ao carregar dados.");
        }  finally {
            setLoading(false);
        }
    }

    useEffect(() => { // carrega as moedas ao montar o hook
        loadCoins();
    },[]);

    return { data, loading, error, reload: loadCoins };

};