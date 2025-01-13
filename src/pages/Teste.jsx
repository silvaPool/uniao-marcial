import { Box } from "@mui/material";
import StyledBoxUmTeste from "../components/StyledBoxUmTeste";
import StyledBoxDoisTeste from "../components/StyledBoxDoisTeste";

function Teste() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <StyledBoxUmTeste></StyledBoxUmTeste>

      <StyledBoxDoisTeste sx={{ background: "blue" }}></StyledBoxDoisTeste>
    </Box>
  );
}

export default Teste;
