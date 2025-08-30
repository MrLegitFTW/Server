import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to My App</h1>
            <p>This is the base home page.</p>
            <button
                onClick={() => navigate("/test")}
                style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}
            >
                Go to Test Page
            </button>
        </div>
    );
}
