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
        {/* <Typography sx={{fontSize: '15px', textWrap: 'balance'}}>
        Plataforma para federações organizarem dojos por atleta, faixa e categoria, além de publicar eventos e conectar a comunidade.
        </Typography> */}
      </Box>

      <Box>
        <SignupWithEmail />
      </Box>
    </StyledBoxLogin>
  );
}

export default PaginaLogin;
