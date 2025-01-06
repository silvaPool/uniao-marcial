import { Box, Typography } from "@mui/material";
import StyledBoxLogin from "./StyledBoxLogin";

function PaginaLogin() {
  return (
    <StyledBoxLogin>
      <Box>
       <Typography sx={{fontSize: '30px', fontFamily: 'Dancing Script'}}>
            União Marcial
       </Typography>
      </Box>

      <Box>
        Login aqui
      </Box>
    </StyledBoxLogin>
  );
}

export default PaginaLogin;
