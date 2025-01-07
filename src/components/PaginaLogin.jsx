import { Box, Typography } from "@mui/material";
import StyledBoxLogin from "./StyledBoxLogin";
import SignupWithEmail from "./SignUp";

function PaginaLogin() {
  return (
    <StyledBoxLogin>
      <Box>
       <Typography sx={{fontSize: '30px', fontFamily: 'Dancing Script'}}>
            União Marcial
       </Typography>
      </Box>

      <Box>
       <SignupWithEmail />
      </Box>
    </StyledBoxLogin>
  );
}

export default PaginaLogin;
