// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate, useNavigate } from "react-router";

// function MainGuard({ children }) {
//   const { signed, loading } = useContext(AuthContext);
//   const navigate = useNavigate();

//   return !loading ? (
//     signed ? (
//       <Navigate to={"/usuario"} />
//     ) : (
//       children
//     )
//   ) : undefined;
// }

// export default MainGuard;
