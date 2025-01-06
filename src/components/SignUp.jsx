import { useState } from "react";

const SignupWithEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.error("Provide Email and Password");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
        } catch (error) {
            const errorCode = error.errorCode;
            const errorMessage = error.message;
            console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
        }
    };
    
    return (
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
    );
};

export default SignupWithEmail;