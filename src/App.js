import React from "react";

import './App.css';
import './Font.css';
import Header from "./Components/UI/Header.js";
import SidebarPrimary from "./Components/UI/SidebarPrimary.js";
import DashboardCandidate from "./Pages/Candidate/DashboardCandidate";


const App = () => {


  return (
    
    
    <div className="app"> 
      <Header/>
      <SidebarPrimary/>
      
      <main>
        <DashboardCandidate/>
      </main>
    </div>
  );
}


export default App;