import React from "react";

import './App.css';
import './Font.css';
import Header from "./Components/UI/Header.js";
import SidebarPrimary from "./Components/UI/SidebarPrimary";


const App = () => {


  return (
    
    
    <div className="app"> 
      <Header/>
      <SidebarPrimary/>
      
      <main>
        <div>App Is going good</div> 
      </main>
    </div>
  );
}


export default App;