import { useState } from "react";
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../services/firebaseConfig";

const SignupWithEmail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    signOut(authInstance).then(() => {
        console.log("Sign-out successful.");
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <form onSubmit={handleSignIn}>
        <button type="submit">Sign In with Email</button>
      </form>
      <button onClick={handleGoogleSignup}>Sign Up with Google</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignupWithEmail;
