import { ENDPOINTS } from "@/api/endpoints";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FolioResponse } from "@/data/data/response/FolioResponse";

export const useFetchDetailFolio = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [folio, setFolio] = useState<FolioResponse>({} as FolioResponse);

  const fetchDetailFolio = async (folioId: string | string[] ) => {
    setLoading(true);
    setError(null);

    try {
      const token = await AsyncStorage.getItem("authToken");
      if (!token) throw new Error("No se encontró un token");
      const response = await fetch(ENDPOINTS.FETCH_FOLIO_ID_GET(folioId), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (!response.ok) throw new Error("Error al obtener el folio");

      const data = await response.json();
      setFolio(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchDetailFolio, folio, loading, error };
};
