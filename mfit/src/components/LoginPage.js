import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from "../AppContext";
import "../App.css"
import MilitaryFitnessTrackerDefault from "../pictures/MilitaryFitnessTrackerDefault.png"
import "bootstrap/dist/js/bootstrap.bundle.min";


export const LoginPage = () => {

    const database = [
        {username:'user1',
         password:'pass1'
        },
        {username:'user2',
         password:'pass2'
        },
        {username:'user3',
         password:'pass3'
        },
      ];

    const [state, setState] = useState(true)
    
    const {userData, setUserData, members, setMembers} = useContext(AppContext)
   
   
    const handleSubmit = () => {
        setUserData({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            name: document.getElementById("name").value,
            branch: document.getElementById("branch_input").value,
            gender: document.getElementById("gender_input").value,
            physicalLimitations: document.getElementById("physical_input").value
        });
       
    }
    const handleLogin = () =>{
        const login = members.filter(member => document.getElementById("username").value.toLowerCase() === member.username
            && document.getElementById("password").value === member.password)
           login.length === 1 ? alert("Congrats!") : alert("Try again!");
           
    }
    
    useEffect(()=>{ 
        
        console.log(userData)
        if(userData.name !== ""){
            setMembers([...members, userData])
        }
       console.log(members)
    }, [userData])

    if (state) {
        return (
            <div className='background'>
                <div className='content'>
                    <div className='centered_login'>
                        <div className='input_fields'>
                            <label htmlFor="username">Username:</label>

                            <input type="text" id='username' name='username' autoComplete="username" required/>
                            
                            <label htmlFor="password">Password:</label>

                            <input type="password" id='password' name='password' autoComplete="password" required/>
                            <br />
                        </div>
                        <div className='input_buttons'>
                            <button className='buttons' onClick={() => handleLogin()}> Login </button>
                            <button className='buttons' onClick={() => setState(false)}> Create Account </button>
                        </div>
                    </div>

                </div>
                <footer className='footer'>
                    mFit &copy; 2022
                </footer>
            </div>
        )
    } else {

        return (

            <div className='background'>
                <div className='content'>
                    {/* <img src={ MilitaryFitnessTrackerDefault } alt='uh oh' /> */}
                    <div className='centered_login2'>
                        <div className='input_fields'>
                            <label htmlFor="username">Username:</label>

                            <input type="text" id='username' name='username' required/>
                          
                            <label htmlFor="password">Password:</label>

                            <input type="password" id='password' name='password' required/>
                            
                            <label htmlFor="name">Name:</label>

                            <input type="text" id='name' name='name' required/>
                            <label htmlFor="branch_input">Branch:</label>
                            <select id="branch_input">
                                <option value="Army"> Army </option>
                                <option value="AirForce"> Air Force </option>
                                <option value="Navy"> Navy </option>
                                <option value="Marines"> Marines </option>
                                <option value="SpaceForce"> Space Force </option>
                                <option value="CoastGuard"> Coast Guard </option>
                            </select>
                            <label htmlFor="gender_input">Gender:</label>
                            <select id="gender_input">
                                <option value="Male"> Male </option>
                                <option value="Female"> Female </option>
                            </select>
                            <label htmlFor="physical_input">Physical Limitations:</label>
                            <select id="physical_input">
                                <option value="Yes"> Yes </option>
                                <option value="No"> No </option>
                                <option value="Unsure"> Unsure </option>
                            </select>   
                            <br />
                        </div>

                        <div className='input_buttons'>
                            <button onClick={() => {
                                let dupe = members.filter(member => member.username.toLowerCase() === document.getElementById("username").value.toLowerCase())
                                let error = false
                                if(document.getElementById("username").value === '' || document.getElementById("password").value===''||document.getElementById("name").value===''){
                                    error = true
                                    alert ('All fields must be complete')
                                }else if(dupe.length === 1){
                                    error = true
                                    alert("Username already exists, try again")
                                }else{
                                    error = false
                                }
                                if(!error){
                                    handleSubmit()
                                    setState(true)
                                }
                                } 
                            }> Create Account </button>
                        </div>
                    </div>

                </div>
                <footer className='footer'>
                    mFit &copy; 2022
                </footer>
            </div>
        )
    }
}