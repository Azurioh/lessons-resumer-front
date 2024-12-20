/// <reference types="vite/client" />

interface importMetaEnv {
  REACT_APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
