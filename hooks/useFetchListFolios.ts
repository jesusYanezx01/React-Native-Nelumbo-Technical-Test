import { ENDPOINTS } from "@/api/endpoints";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useFetchListFolios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [folios, setFolios] = useState<any[]>([]);

  const fetchListFolios = async (limit: string, order: string) => {
    setLoading(true);
    setError(null);

    try {
      const token = await AsyncStorage.getItem("authToken");
      if (!token) throw new Error("No se encontró un token");

      const response = await fetch(
        `${ENDPOINTS.FETCH_REPORT_FOLIO_GET}?limit=${limit}&order=${order}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Error al obtener los folios");

      const data = await response.json();
      setFolios(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchListFolios, folios, loading, error };
};
