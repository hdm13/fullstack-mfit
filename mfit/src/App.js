import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { LoginPage } from "./components/LoginPage";
import { UserLanding } from "./components/UserLanding";
import Dropdown from "./components/Dropdown";

function App() {

  const [ members, setMembers] = useState([]);

  // api fetch
  useEffect(() => {
    fetch('http://localhost:8080')
        .then(res => res.json())
        .then(data =>
            setMembers(data)
          )
  }, []);

  //getter & setter
  const value = {
    members,
    setMembers
  };

  return (
    <>
      <Router>
        <AppContext.Provider value={value}>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/member" element={<UserLanding />} />
            <Route exact path="/test" element={<Dropdown />} />
          </Routes>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
