import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                // const response = await fetch("https://fsdg-blog-login-server.vercel.app/api/admin/auth-check", {
                const response = await fetch("http://localhost:5000/api/admin/auth-check", {
                    method: "GET",
                    credentials: "include",  // Include cookies with the request
                });

                
                if (response.ok) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Authentication check failed:", error);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    if (loading) {
        return <div>Loading...</div>;  // Or a spinner
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
