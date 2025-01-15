import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { supabase } from "./supabaseClient";
import Account from "./Account";
import Auth from "./Auth";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      <div className="container" style={{ padding: "50px 0 100px 0" }}>
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </div>

      {/* <SignupWithEmail /> */}
      {/* <PaginaLogin /> */}
      {/* <PaginaUsuario /> */}

      {/* <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="usuario" element={<PaginaUsuario />} />
      </Routes> */}

      {/* <Auth>
        <Routes />
      </Auth> */}
    </>
  );
}

export default App;
