import Login from "../components/Login";
import PaginaLogin from "../components/PaginaLogin";
import Cadastro from "../components/SignUp";
import MainGuard from "../utils/MainGuard";

const OpenRoutes = [
  {
    path: "/",
    element: (
      <MainGuard>
        <PaginaLogin />
      </MainGuard>
    ),
  },
  {
    path: "/login",
    element: (
      <MainGuard>
        <Login />
      </MainGuard>
    ),
  },
  {
    path: "/cadastro",
    element: (
      <MainGuard>
        <Cadastro />
      </MainGuard>
    ),
  },
];

export default OpenRoutes;
