import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import MilitaryFitnessTrackerIcon from "../pictures/MilitaryFitnessTrackerIcon.png"
import { StyledHeader } from "./styles/Header.styled";



export const Header = () => {
    const myFunction = (x) => {
        x.classList.toggle("change");
    }
    return (
        
        <div className="nav">
            <div class="container" onClick={() => myFunction(this)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <span id="userName">
                USER NAME
            </span>
            <Link to="/">
                <img src={MilitaryFitnessTrackerIcon} alt="MilitaryFitnessTrackerIcon" width="150px" />  
            </Link>
        </div>
    )
}