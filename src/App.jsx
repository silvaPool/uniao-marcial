import "./App.css";
import PaginaLogin from "./components/PaginaLogin";
import SignupWithEmail from "./components/SignUp";
import PaginaUsuario from "./components/PaginaUsuario";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      {/* <SignupWithEmail /> */}
      {/* <PaginaLogin /> */}
      {/* <PaginaUsuario /> */}

      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="usuario" element={<PaginaUsuario />} />
      </Routes>
    </>
  );
}

export default App;
