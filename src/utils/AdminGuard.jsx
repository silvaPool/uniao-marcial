import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router";

function AdminGuard({ children }) {
  const { signed, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return !loading ? (
    !signed ? (
      <Navigate to={"/"} />
    ) : user.email === "admin@admin.com" ? (
      children
    ) : (
      navigate("/usuario")
    )
  ) : undefined;
}

export default AdminGuard;
