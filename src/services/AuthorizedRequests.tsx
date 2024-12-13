import axios from "axios";
import { useState } from "react";
import { useAuth } from "react-oidc-context";

export const useSendAuthenticatedRequest = () => {
  const auth = useAuth();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const sendAuthenticatedRequest = async ({
    url,
    data,
    method = "post",
  }: {
    url: string;
    data?: any;
    method?: string;
  }) => {
    if (!auth.isAuthenticated) {
      throw new Error("Keycloak not initialized/authenticated yet.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${auth.user?.access_token}`,
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios({ method, url, data, ...config });

      if (
        response.status < 200 ||
        response.status >= 300 ||
        (response.data && response.data.status !== 200)
      ) {
        throw new Error(response.data?.message || "Request failed");
      }

      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { sendAuthenticatedRequest, loading, error };
};
