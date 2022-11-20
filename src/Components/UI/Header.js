import React from "react";

import './Header.css';

import SkillibleLogo from '../../Assets/skillible-logo.png';



const Header = () => {
  return (
    <div className="header-flex">
      <div className="header-left">
        <img src={SkillibleLogo} className="header-logo" alt="logo" />
      </div>
      <div className="header-right">
        <div>Static-Course-Page</div>
        <div>Dynamic-Course-Page</div>
        <div className="user-account-thumb">
          Thumb
        </div>
      </div>
    </div>
  );
}


export default Header;