// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check for token in local storage on initial load
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       // Decode token to get user information (optional)
//       // Example: setUser({ token });
//       setUser(true); // Simplified
//     }
//   }, []);

//   const login = async (formData) => {
//     try {
//       const response = await fetch("https://fsdg-blog-login-server.vercel.app/api/admin/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         localStorage.setItem('authToken', result.token); // Store token
//         setUser(true); // Simplified, adjust as needed
//       } else {
//         console.error(result.message);
//         setUser(null);
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       setUser(null);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
