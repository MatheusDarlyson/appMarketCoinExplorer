import { useState, useEffect } from "react";
import { coinsApi } from "../api/coinsApi";
import { CoinDetails } from "../types";

export function useFetchCoinDetails(id: string) {
  const [data, setData] = useState<CoinDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setError(null);
      setLoading(true);

      const details = await coinsApi.getCoinDetails(id);
      setData(details);

    } catch (err) {
      setError("Erro ao carregar detalhes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  return { data, loading, error, reload: load };
}
