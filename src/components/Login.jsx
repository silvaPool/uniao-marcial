import { useContext, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { login, user, signed } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{ email: "", senha: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Requied"),
          senha: Yup.string()
            .min(8, "A senha deve ter mais de 8 digitos")
            .required("A senha é obrigatória!"),
        })}
        onSubmit={async (values) => {
          try {
            const res = await login(values.email, values.senha);

            if (res.user) {
              if (res.user.email === "admin@admin.com") {
                navigate("/admin");
              } else {
                navigate("/usuario");
              }
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div>Login</div>

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" className="field" />
            <ErrorMessage name="email" />

            <label htmlFor="senha">Senha</label>
            <Field name="senha" type="password" className="field" />
            <ErrorMessage name="senha" />

            <button type="submit">Submit</button>

            <p class="signup-link">
              Don't have an account?
              <a class="signup-link link" onClick={() => navigate("/cadastro")}>
                {" "}
                Sign up now
              </a>
            </p>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Login;
