import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENDPOINTS } from "@/api/endpoints";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("authToken");
      if (storedToken) {
        setToken(storedToken);
      }
    };
    loadToken();
  }, []);

  const login = async (username: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(ENDPOINTS.LOGIN_POST, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error("Error en la autenticación");

      const data = await response.json();
      const authToken = data.token;

      await AsyncStorage.setItem("authToken", authToken);
      setToken(authToken);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("authToken");
    setToken(null);
  };

  return { login, logout, token, loading, error };
};
