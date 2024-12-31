import { useAuth } from "react-oidc-context";
import { useState, useEffect } from "react";
import { DecodedJwt } from "@/services/DecodedJwt";

export const useAuthWithRoles = () => {
  const { user, signinRedirect, signoutRedirect, isAuthenticated } = useAuth();
  const [decodedJwt, setDecodedJwt] = useState<DecodedJwt | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [roles, setRoles] = useState<string[]>([]);

  // Fetch roles from the OIDC user object or any other source
  useEffect(() => {
    if (user) {
      const token = user.access_token;
      const decoded = new DecodedJwt(token);
      setDecodedJwt(decoded);
      setId(decoded.getPayload().sub);
      const userRoles = decoded.getPayload().realm_access.roles as string[];
      setRoles(userRoles);
    }
  }, [user]);

  // Custom logic to check if the user has a certain role
  const hasRole = (role: string) => roles.includes(role);

  return {
    user,
    id,
    isAuthenticated,
    roles,
    decodedJwt,
    hasRole,
    signinRedirect,
    signoutRedirect,
  };
};
