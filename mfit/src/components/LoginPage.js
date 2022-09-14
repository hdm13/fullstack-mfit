import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import "../App.css"
import MilitaryFitnessTrackerDefault from "../pictures/MilitaryFitnessTrackerDefault.png"
import "bootstrap/dist/js/bootstrap.bundle.min";





export const LoginPage = () => {
    let [state, setState] = useState(true)
    if (state) {
        return (
            <body className='background'>
                <div className='content'>
                    <div className='centered_login'>
                        <div className='input_fields'>
                            <label for="username">Username:</label>

                            <input type="text" id='username' name='username' />
                            <br />
                            <label for="password">Password:</label>

                            <input type="password" id='password' name='password' />
                            <br />
                        </div>
                        <div className='input_buttons'>
                            <button onClick={() => setState(false)}> Log In </button>
                        </div>
                    </div>

                </div>
                <footer className='footer'>
                    mFit &copy; 2022
                </footer>
            </body>
        )
    } else {

        return (

            <body className='background'>
                <div className='content'>
                    {/* <img src={ MilitaryFitnessTrackerDefault } alt='uh oh' /> */}
                    <div className='centered_login2'>
                        <div className='input_fields'>
                            <label for="username">Username:</label>

                            <input type="text" id='username' name='username' />
                            <br />
                            <label for="password">Password:</label>

                            <input type="password" id='password' name='password' />
                            <br />
                            <label for="name">Name:</label>

                            <input type="text" id='name' name='name' />
                            <br />

                            <label for="branch_input">Branch:</label>
                            <div class="btn-group dropdown">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Branch of Service
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Army</a>
                                    <a class="dropdown-item" href="#">Air Force</a>
                                    <a class="dropdown-item" href="#">Navy</a>
                                    <a class="dropdown-item" href="#">Marines</a>
                                    <a class="dropdown-item" href="#">Space Force</a>
                                    <a class="dropdown-item" href="#">Coast Guard</a>
                                </div>
                            </div>
                            <br />

                            <label for="gender_input">Gender:</label>
                            <div class="btn-group dropdown">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Gender
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Male</a>
                                    <a class="dropdown-item" href="#">Female</a>
                                </div>
                            </div>
                            <br />

                            <label for="physical_input">Physical Limitations:</label>
                            <div class="btn-group dropdown">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Physical Limitations
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Yes</a>
                                    <a class="dropdown-item" href="#">No</a>
                                    <a class="dropdown-item" href="#">Not sure</a>
                                </div>
                            </div>
                            <br />

                        </div>

                        <div className='input_buttons'>
                            <button onClick={() => setState(true)}> Create Account </button>
                        </div>
                    </div>

                </div>
                <footer className='footer'>
                    mFit &copy; 2022
                </footer>
            </body>
        )
    }
}