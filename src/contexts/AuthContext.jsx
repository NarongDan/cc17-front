import axios from "axios";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const run = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        if (!token) {
          return;
        }

        const rs = await axios.get("http://localhost:8889/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(rs.data.user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    run();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
