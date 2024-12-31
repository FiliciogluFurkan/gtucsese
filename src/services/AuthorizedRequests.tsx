import { useAuthWithRoles } from "@/hooks/UseAuthWithRoles";
import axios from "axios";
import { useState } from "react";

export const useSendAuthenticatedRequest = () => {
  const auth = useAuthWithRoles();
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

      // Modified error checking logic
      if (response.status < 200 || response.status >= 300) {
        throw new Error(
          response.data?.message ||
            "Request failed with status code " + response.status
        );
      }

      // Remove the check for response.data.status === 200
      return response;
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { sendAuthenticatedRequest, loading, error };
};
