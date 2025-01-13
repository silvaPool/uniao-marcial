import { Navigate } from "react-router";
import Login from "../components/Login";
import PaginaLogin from "../components/PaginaLogin";
import Cadastro from "../components/SignUp";
import MainGuard from "../utils/MainGuard";

const OpenRoutes = [
  {
    path: "/",
    element: (
      <MainGuard>
        {/* <Navigate to="/" replace /> */}
        <PaginaLogin />
      </MainGuard>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
];

export default OpenRoutes;
