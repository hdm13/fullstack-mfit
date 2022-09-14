import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import "../App.css"

export const LoginPage  = () => {
    return(
        <div className='content'>
            <br/>
            <img src='./sdi-blended-full-stack-project-scaffold/mfit/pictures/MilitaryFitnessTrackerDefault.png' alt='uh oh' />
            <div className='centered_login'>             
                <label for="username">Username:</label>
                <br/>
                <input type="text" id='username'/>
                <br/>
                <label for="password">Password:</label>
                <br/>
                <input type="text" id='password'/>
                <br/>
            </div>
            <div className='footer'>
                     mFit &copy; 2022
            </div>
        </div>
    )
}