import { Box, Button, Typography } from "@mui/material";
import StyledBoxLogin from "./StyledBoxLogin";
import Cadastro from "./SignUp";
import Login from "./Login";
import { useState } from "react";

function PaginaLogin() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <StyledBoxLogin>
      <Box>
        <Typography sx={{ fontSize: "60px", fontFamily: "Dancing Script" }}>
          União Marcial
        </Typography>
        <Typography
          sx={{
            fontSize: "23px",
            textWrap: "balance",
            fontFamily: "Dancing Script",
            textAlign: "center",
          }}
        >
          Organize, simplifique e conecte!
        </Typography>
      </Box>

      <Box>
        {isLogin ? (
          <Login onToggleSignUp={handleToggle} />
        ) : (
          <Cadastro onToggleLogin={handleToggle} />
        )}
      </Box>
    </StyledBoxLogin>
  );
}

export default PaginaLogin;
