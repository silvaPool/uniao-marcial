import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import Cadastro from "./SignUp";

const Login = ({ onToggleSignUp }) => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
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
          <div class="form-box">
            <form onSubmit={formik.handleSubmit} class="form">
              <span class="title">Login</span>
              <span class="subtitle">Entre e navegue</span>

              <div class="form-container">
                {/* <label htmlFor="email">Email</label> */}
                <Field
                  name="email"
                  type="text"
                  class="input"
                  placeholder="Email"
                />
                <ErrorMessage name="email" />

                {/* <label htmlFor="senha">Senha</label> */}
                <Field
                  name="senha"
                  type="password"
                  class="input"
                  placeholder="password"
                />
                <ErrorMessage name="senha" />
              </div>

              <button type="submit">Submit</button>
            </form>

            <div class="form-section">
              <p class="signup-link">
                Don't have an account?
                <a class="signup-link link" onClick={onToggleSignUp}>
                  {" "}
                  Sign up now
                </a>
              </p>
            </div>
          </div>
        )}
      </Formik>
    </>
  ) : (
    <Cadastro />
  );
};

export default Login;
