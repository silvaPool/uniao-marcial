import { Box } from "@mui/material";
import styled from "styled-components";

const StyledBoxDoisTeste = styled(Box)`
  && {
    color: white;
    background: #84A9FF;
    box-shadow: 10px 5px 5px #ADC8FF;
    border-radius: 10px;
    width: 75vw;
    height: 75vh;
    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: perspective(500px);
  }
`;

export default StyledBoxDoisTeste;
