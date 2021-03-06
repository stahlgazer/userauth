import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import {DOMAIN, CLIENT_ID} from "./data/client"


ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);