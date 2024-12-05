import { useAuth } from "react-oidc-context";
import { useState, useEffect } from "react";

export const useAuthWithRoles = () => {
  const { user, signinRedirect, signoutRedirect, isAuthenticated } = useAuth();
  const [roles, setRoles] = useState<string[]>([]);

  // Fetch roles from the OIDC user object or any other source
  useEffect(() => {
    if (user) {
      const userRoles = (user.profile?.roles as string[]) || ["random-role"]; // Assuming roles are in the profile object
      setRoles(userRoles);
    }
  }, [user]);

  // Custom logic to check if the user has a certain role
  const hasRole = (role: string) => roles.includes(role);

  return {
    user,
    isAuthenticated,
    roles,
    hasRole,
    signinRedirect,
    signoutRedirect,
  };
};
