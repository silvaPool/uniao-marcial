import { Box, Typography } from "@mui/material";
import StyledBoxLogin from "./StyledBoxLogin";
import SignupWithEmail from "./SignUp";

function PaginaLogin() {
  return (
    <StyledBoxLogin>
      <Box>
        <Typography sx={{ fontSize: "60px", fontFamily: "Dancing Script" }}>
          União Marcial
        </Typography>
        <Typography sx={{ fontSize: "23px", textWrap: "balance", fontFamily: 'Dancing Script', textAlign: 'center' }}>
          Organize, simplifique e conecte!
        </Typography>
      </Box>

      <Box>
        <SignupWithEmail />
      </Box>
    </StyledBoxLogin>
  );
}

export default PaginaLogin;
