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
        padding: "25px",
      }}
    >
      <StyledBoxUmTeste>
        <button class="buttonNavegacao">Button</button>

        <button class="buttonNavegacao">Button</button>

        <button class="buttonNavegacao">Button</button>

        <button class="buttonNavegacao">Button</button>

        <button class="buttonNavegacao">Button</button>
      </StyledBoxUmTeste>

      <StyledBoxDoisTeste></StyledBoxDoisTeste>
    </Box>
  );
}

export default Teste;
