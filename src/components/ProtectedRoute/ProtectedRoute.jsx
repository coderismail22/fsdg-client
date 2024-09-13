import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    // Check if the token is present
    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        // Decode token and check expiration (optional)
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;  // Current time in seconds

        if (decodedToken.exp < currentTime) {
            localStorage.removeItem("token");  // Remove expired token
            return <Navigate to="/login" />;
        }

        return children;  // Render the protected component
    } catch (error) {
        localStorage.removeItem("token");  // Remove invalid token
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
