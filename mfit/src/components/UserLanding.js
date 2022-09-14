import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import { Header } from './Header';
import { Container } from './styles/Container.styled';
import { ThemeProvider } from 'styled-components';

// const theme = {
//     colors: {
//         header: '#ebfbff',
//     },
// }


export const UserLanding = () => {
    return(
        // <ThemeProvider theme={theme}>
        <>
        <Header />
         <Container>  
               <p>Main Content...</p>
         </Container>
      </>
    )
}