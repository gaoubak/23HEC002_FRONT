import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Authentification/login"
import Register from "./Authentification/register"
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import HomeRoutes from "./Home/pages/Routes";

function App() {
  const [cookies] = useCookies(['session']);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";
    if (!isLoginPage && !isRegisterPage && !cookies.session) {
      navigate("/login", { state: { location: location.pathname } });
    }

  }, [location, navigate, cookies]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="home/*" element={<HomeRoutes />} />
    </Routes>
  )
}

export default App
