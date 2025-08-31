import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes.jsx";

const domain = "dev-7l5cafpeqcorvfvh.uk.auth0.com";
const clientId = "ZjK35fz4WsMcTQFWyk150jiYjfJYqujZ";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <AppRouter />
    </React.StrictMode>
);
