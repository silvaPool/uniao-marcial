import "./App.css";
import { Auth } from "./context/AuthContext";
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* <SignupWithEmail /> */}
      {/* <PaginaLogin /> */}
      {/* <PaginaUsuario /> */}

      {/* <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="usuario" element={<PaginaUsuario />} />
      </Routes> */}

      <Auth>
        <Routes />
      </Auth>
    </>
  );
}

export default App;
