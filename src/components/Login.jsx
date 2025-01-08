import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.error("Provide Email and Password");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
      console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.error("Provide Email and Password");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.errorCode;
      const errorMessage = error.message;
      console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (!credential) {
        console.error("Error in user Credential");
        return;
      }
      const token = credential.accessToken;
      const user = result.user;
      console.log(user, token);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(
        "Google Signup Error:",
        errorCode,
        errorMessage,
        email,
        credential
      );
    }
  };

  const handleSignOut = () => {
    const authInstance = getAuth();
    signOut(authInstance)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div class="form-box">
        <form class="form">
          <span class="title">Inscrever-se</span>
          <span class="subtitle">Crie uma conta gratuita com seu e-mail.</span>
          <div class="form-container">
            {/* <input type="text" class="input" placeholder="Full Name" /> */}
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button>Inscrever-se</button>
        </form>
        <div class="form-section">
          <p>
          Tenha uma conta? <a onClick={() => navigate("/login")}>Conecte-se</a>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
