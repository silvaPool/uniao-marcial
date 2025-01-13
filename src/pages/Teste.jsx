import { Box, Button } from "@mui/material";
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
      <StyledBoxUmTeste>
        <button class="button type1">
          <span class="btn-txt">Teste</span>
        </button>
        <Button>Teste</Button>
        <Button>Teste</Button>
        <Button>Teste</Button>
        <Button>Teste</Button>
      </StyledBoxUmTeste>

      <StyledBoxDoisTeste sx={{ background: "blue" }}></StyledBoxDoisTeste>
    </Box>
  );
}

export default Teste;
