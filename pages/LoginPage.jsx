// src/pages/LoginPage.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    if (isAuthenticated) {
        return <div>You are already logged in!</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to My App</h1>
            <p style={styles.subtitle}>Please log in to continue</p>
            <button style={styles.button} onClick={() => loginWithRedirect()}>
                Log In
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "2.5rem",
        marginBottom: "1rem",
    },
    subtitle: {
        fontSize: "1.2rem",
        marginBottom: "2rem",
    },
    button: {
        padding: "10px 25px",
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#0070f3",
        color: "#fff",
    },
};

export default LoginPage;
