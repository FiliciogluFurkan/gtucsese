import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store.tsx";
import { AuthProvider } from "react-oidc-context";
import { Provider } from "react-redux";
import { oidcConfig } from "./configs/SecurityConfig";

createRoot(document.getElementById("root")!).render(
  <AuthProvider {...oidcConfig}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </AuthProvider>
);
