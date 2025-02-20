import Exemplo from "../components/Exemplo";
import PaginaUsuario from "../pages/PaginaUsuario";
import Teste from "../pages/Teste";
import AuthGuard from "../utils/AuthGuard";

const PrivateRoutes = [
  {
    path: "/usuario",
    element: (
      <AuthGuard>
        <PaginaUsuario />
      </AuthGuard>
    ),
    children: [
      {
        path: "teste",
        element: <Teste />
      },
      {
        path: "exemplo",
        element: <Exemplo />,
      },
    ]
  },
  
 
];

export default PrivateRoutes;
