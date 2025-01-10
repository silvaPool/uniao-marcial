import { useContext, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { Outlet, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

const Cadastro = () => {
  const { signUp, user, signed } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  // const handleSubmit = isLogin ? handleSignIn : handleSignup;

  return (
    <>
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          senha: Yup.string()
            .min(5, "A senha deve ter mais de 8 digitos")
            .required("A senha é obrigatória!"),
        })}
        onSubmit={async (values) => {
          const res = await signUp(values.email, values.senha);
          if (res.user) {
            alert("Conta cadastrada com sucesso");
          } else {
            alert("Ocorreu um erro, tente com um email diferente");
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="logo-form">Cadastro</div>

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="text" className="field" />
            <ErrorMessage name="email" />

            <label htmlFor="senha">Senha</label>
            <Field name="senha" type="password" className="field" />
            <ErrorMessage name="senha" />

            <button type="submit" className="button-form">
              Submit
            </button>

            <p class="signup-link">
              Has registration?
              <a class="signup-link link" onClick={() => navigate("/")}>
                {" "}
                Return Login
              </a>
            </p>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Cadastro;
