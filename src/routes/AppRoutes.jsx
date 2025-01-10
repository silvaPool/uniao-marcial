import { createBrowserRouter, RouterProvider } from "react-router";
import OpenRoutes from "./OpenRoutes";
import OpenRoutes from "./PrivateRoutes";
import OpenRoutes from "./AdminRoutes";

function Routes() {
    const router = createBrowserRouter([...OpenRoutes, ...PrivateRoutes, ...AdminRoutes]);

    return (<RouterProvider router={router} />)
}

export default Routes;