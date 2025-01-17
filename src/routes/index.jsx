import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import SignInPage from "../pages/auth/SignInPage.jsx";
import SignUpPage from "../pages/auth/SignUpPage.jsx";
import ProtectedPage from "../pages/ProtectedPage.jsx";
import NotFoundPage from "../pages/404Page.jsx";
import AuthProtectedRoute from "./AuthProtectedRoute.jsx";
import Providers from "../Providers.jsx";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Providers />,
    children: [
      // Public routes
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/auth/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUpPage />,
      },
      // Auth Protected routes
      {
        path: "/",
        element: <AuthProtectedRoute />,
        children: [
          {
            path: "/protected",
            element: <ProtectedPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;