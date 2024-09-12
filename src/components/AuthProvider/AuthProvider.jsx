// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//         if (token) {
//             setUser(true);
//         }
//     }, []);

//     const login = (token) => {
//         localStorage.setItem("authToken", token);
//         setUser(true);
//     };

//     const logout = () => {
//         localStorage.removeItem("authToken");
//         setUser(null);
//     };

//     return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);
