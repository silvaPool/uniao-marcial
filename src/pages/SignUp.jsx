import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

const Cadastro = ({ onToggleLogin }) => {
  const { signUp } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

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
          <div class="form-box">
            <form onSubmit={formik.handleSubmit} class="form">
              <span class="title">Cadastro</span>
              <span class="subtitle">
                Crie uma conta gratuita com seu e-mail.
              </span>

              <div class="form-container">
                {/* <label htmlFor="email">Email Address</label> */}
                <Field
                  name="email"
                  type="text"
                  className="input"
                  placeholder="Email"
                />
                <ErrorMessage name="email" />

                {/* <label htmlFor="senha">Senha</label> */}
                <Field
                  name="senha"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <ErrorMessage name="senha" />
              </div>

              <button type="submit" className="button-form">
                Submit
              </button>
            </form>

            <div class="form-section">
              <p>
                Has registration?
                <a class="signup-link link" onClick={onToggleLogin}>
                  {" "}
                  Return Login
                </a>
              </p>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Cadastro;
