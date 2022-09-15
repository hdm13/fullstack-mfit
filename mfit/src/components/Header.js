import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import MilitaryFitnessTrackerIcon from "../pictures/MilitaryFitnessTrackerIcon.png"
// import { StyledHeader } from "./styles/Header.styled";


const NavContainer = styled.div`
  max-width: 100%; 
  padding: 0 1px;
  display: flex;
  flex-basis: auto;
  justify-content:right;
  
`
const Image = styled.img`
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
}
`
// const Flex = styled.div`
// display: flex;
// padding-top: 15px;
// padding-bottom: 85px;
// align-items: center;
// text-align: center;
// justify-content: space-between;
// color: black;
// & > div,
// & >ul {
//   flex: 1;
// }`

// const Flex2 = styled.div`
// display: flex;
// padding-top: 20px;
// padding-bottom: 40px;
// align-items: center;
// text-align: center;
// justify-content: space-between;
// color: black;
// & > div,
// & >ul {
//   flex: 1;
// }`
const SmSettings = styled.div`
    margin-top: 3%;
    text-align: center;
`

const NavRight = styled.nav`
`
const StyledHeader = styled.header`
background-color: #00242C;
padding: 5px 0;
padding-bottom: 5px;
height: 150px;
margin-top: 2px;
color: #ffffff;
`

export const Header = () => {

    //   const handleHamburguerButtonClick = () => {
    //     if ( )
    //   }

    return (
        // <>
        // // <header>
        // //   <h1><SmSettings> USERNAME </SmSettings></h1>
        // // </header>
        // </>
        <>
            <StyledHeader>            
            <SmSettings> USERNAME </SmSettings>
                <NavContainer style={{ gap: '10px 20px', justifycontent: 'space-between' }}>
                    <NavRight> 
                        <Image src={MilitaryFitnessTrackerIcon} alt="MilitaryFitnessTrackerIcon" width="150px" />
                    </NavRight>
                </NavContainer>
            </StyledHeader>
        </>
    )
}