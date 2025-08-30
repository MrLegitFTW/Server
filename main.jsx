import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = "dev-7l5cafpeqcorvfvh.uk.auth0.com";
const clientId = "ZjK35fz4WsMcTQFWyk150jiYjfJYqujZ";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{ redirect_uri: window.location.origin }}
        >
            <AppRouter />
        </Auth0Provider>
    </React.StrictMode>
);
