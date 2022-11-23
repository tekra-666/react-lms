import React from "react";

import './App.css';
import './Font.css';
import Header from "./Components/UI/Header.js";
import SidebarPrimary from "./Components/UI/SidebarPrimary.js";
import ProfileLearner from "./Pages/Candidate/ProfileLearner.js";


const App = () => {
  return (
    <div className="app"> 
      <Header/>
      <SidebarPrimary/>
      <main>
        <ProfileLearner/>
      </main>
    </div>
  );
}


export default App;