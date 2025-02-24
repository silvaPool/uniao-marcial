import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LoginButton from "./components/LoginButton";
import { Route, Routes } from "react-router";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <NavBar />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/external-api" element={<ExternalApi />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
