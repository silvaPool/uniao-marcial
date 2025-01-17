import { Outlet } from "react-router";
import { useSession } from "../context/SessionProvider";
import NotFoundPage from "../pages/404Page";

const AuthProtectedRoute = () => {
  const { session } = useSession();
  if (!session) {
    return <NotFoundPage />;
  }
  return <Outlet />;
};

export default AuthProtectedRoute;
