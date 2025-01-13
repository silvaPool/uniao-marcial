import { Box } from "@mui/material";
import styled from "styled-components";

const StyledBoxUmTeste = styled(Box)`
  && {
    border: 1px solid white;
    color: white;
    background: #ff6357;
    border-radius: 10px;
    width: 15vw;
    height: 75vh;
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export default StyledBoxUmTeste;
