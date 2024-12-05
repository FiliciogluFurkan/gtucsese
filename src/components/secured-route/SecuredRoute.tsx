import { withAuthenticationRequired } from "react-oidc-context";
import { Outlet } from "react-router-dom";

const SecuredRoute = () => {
  return <Outlet />;
};

export default withAuthenticationRequired(SecuredRoute, {
  OnRedirecting: () => <div>Redirecting to the login page...</div>,
});
