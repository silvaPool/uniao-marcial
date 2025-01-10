import PaginaUsuario from "../components/PaginaUsuario";
import AuthGuard from "../utils/AuthGuard"

const PrivateRoutes = [
{
    path: "/usuario",
    element: (
        <AuthGuard>
            <PaginaUsuario />,
        </AuthGuard>
    )
}
];

export default PrivateRoutes;