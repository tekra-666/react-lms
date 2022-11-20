import React from "react";

import './App.css';
import './Font.css';
import Header from "./Components/UI/Header.js";
import SidebarPrimary from "./Components/UI/SidebarPrimary.js";
import ProfileCandidate from "./Pages/Candidate/ProfileCandidate.js";


const App = () => {


  return (
    
    
    <div className="app"> 
      <Header/>
      <SidebarPrimary/>
      
      <main>
        <ProfileCandidate/>
      </main>
    </div>
  );
}


export default App;