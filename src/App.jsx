import "./App.css";
import PaginaLogin from "./components/PaginaLogin";
import SignupWithEmail from "./components/SignUp";
import PaginaUsuario from "./components/PaginaUsuario";
import { Route, Routes } from "react-router";
import Login from "./components/Login";

function App() {
  return (
    <>
      {/* <SignupWithEmail /> */}
      {/* <PaginaLogin /> */}
      {/* <PaginaUsuario /> */}

      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="usuario" element={<PaginaUsuario />} />
      </Routes>
    </>
  );
}

export default App;
