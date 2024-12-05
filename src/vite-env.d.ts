/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_API_URL: string;
    readonly VITE_CDN_URL: string;
    readonly VITE_KEYCLOAK_URL: string;
    readonly VITE_KEYCLOAK_CLIENT_ID: string;
    readonly VITE_KEYCLOAK_REDIRECT_URI: string;
  
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}