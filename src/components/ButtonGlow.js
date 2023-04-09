import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function ButtonGlow({text}) {

    const ButtonGlow = styled(Button)(({ theme }) => ({
        boxShadow: `0px 0px 10px 5px #00CC65`,
        "&:hover": {
            boxShadow: "0px 0px 30px 15px #00CC65",
          }
        }));
  return (
    <ButtonGlow variant="contained" disableElevation="true" >{text}</ButtonGlow>
  )
}
