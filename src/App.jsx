import "./App.css";
import { RouterProvider } from "react-router";
import router from "./routes";
import PaginaUsuario from "./pages/PaginaUsuario"


function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <PaginaUsuario /> */}
      
    </>
  );
}

export default App;
