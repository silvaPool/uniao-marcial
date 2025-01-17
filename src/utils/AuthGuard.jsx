// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router";

// function AuthGuard({children}) {
    
//     const {signed, loading, user} = useContext(AuthContext);

//     return !loading ? (
//         !signed ? (
//           <Navigate to={"/"} />
//         ) : user.email === "admin@admin.com" ? (
//           <Navigate to={"/admin/home"} />
//         ) : (
//           children
//         )
//       ) : undefined;
// }

// export default AuthGuard;