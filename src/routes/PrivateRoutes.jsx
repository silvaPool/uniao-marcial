import Exemplo from "../components/Exemplo";
import PaginaUsuario from "../pages/PaginaUsuario";
import AuthGuard from "../utils/AuthGuard";

const PrivateRoutes = [
  {
    path: "/usuario",
    element: (
      <AuthGuard>
        <PaginaUsuario />,
      </AuthGuard>
    ),
  },
  {
    path: "/exemplo",
    element: <Exemplo />,
  },
];

export default PrivateRoutes;
