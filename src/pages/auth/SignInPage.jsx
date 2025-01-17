import { Navigate } from "react-router";
import { useSession } from "../../context/SessionProvider";
import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { Link } from "react-router";

const SignInPage = () => {
  const { session } = useSession();
  if (session) return <Navigate to="/" />;

  const [status, setStatus] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

 const resendConfirmationEmail = async ()=> {
  try {
    const {error} = await supabase.auth.resetPasswordForEmail(formValues.email.trim());
    if (error) {
      alert("Erro ao reenviar e-mail de confirmação: "  + error.message);
    } else {
      alert("E-mail de confirmação reenviado. Verifique sua caixa de entrada.");
    }
  } catch (error) {
    console.log("Erro ao reenviar o e-mail de confirmação", error);
  }
 }

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");
    const { error } = await supabase.auth.signInWithPassword({
      email: formValues.email,
      password: formValues.password,
    });
    if (error) {
      alert(error.message);
    }
    setStatus("");
  };



  return (
    <main>
      <Link className="home-link" to="/">
        Home
      </Link>
      <form className="main-container" onSubmit={handleSubmit}>
        <h1 className="header-text">Sign In</h1>
        <input
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <button>
          Reenviar e-mail de confirmação
        </button>
        <Link className="auth-link" to="/auth/sign-up">
        Don't have an account? Sign Up
        </Link>
        {status && <p>{status}</p>}
      </form>
    </main>
  );
};

export default SignInPage;
