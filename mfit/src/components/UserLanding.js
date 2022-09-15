import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import { Header } from './Header';
import { Container } from './styles/Container.styled';
import { ThemeProvider } from 'styled-components';
import { StyledHeader } from './styles/Header.styled';
import { LineGraph } from './LineGraph';



export const UserLanding = () => {
    return (
        <>
            <Header />
            <Container>
                <p>Main Content...</p>
            </Container>
                <div className="app">
                    <h2>Chart</h2>
                    <div className="wrapper">
                        {/* <LineGraph /> */}
                    </div>
                </div>
        </>
    )
}