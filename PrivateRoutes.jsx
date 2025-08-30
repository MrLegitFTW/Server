import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading, error } = useAuth0();

    // While Auth0 is checking the session (e.g. after refresh), just show loading
    if (isLoading) {
        return <div>Loading session...</div>;
    }

    // If there was an error restoring the session, handle it
    if (error) {
        console.error("Auth0 error:", error);
        return <Navigate to="/login" />;
    }

    // Once loading is done, either allow or redirect
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
