import Login from "../components/Login";
import SignupWithEmail from "../components/SignUp";
import MainGuard from "../utils/MainGuard";

const OpenRoutes = [

    {
        path: "/",
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
                <SignupWithEmail />
            </MainGuard>
        )
    }

];

export default OpenRoutes;