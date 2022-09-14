import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { LoginPage } from "./components/LoginPage";
import { UserLanding } from "./components/UserLanding";

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
            <Route exact path="/member/:id" element={<UserLanding />} />
          </Routes>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
