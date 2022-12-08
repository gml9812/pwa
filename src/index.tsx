import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { authClient } from "./apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import "@seed-design/stylesheet/global.css";
import "@stackflow/plugin-basic-ui/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={authClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
