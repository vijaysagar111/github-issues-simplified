import React from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="nav_header">
        <div className="align_center">
          <div className="left_nav">
            <div className="logo">
              <FontAwesomeIcon icon={faGithub} size="2x" 
               />
            </div>
            <div className="menu">
              <ul>
                <li>Product <FontAwesomeIcon icon={faAngleDown} style={{color
                :"grey"}}/></li>
                <li>Solutions <FontAwesomeIcon icon={faAngleDown} style={{color
                :"grey"}}/></li>
                <li>Open Source <FontAwesomeIcon icon={faAngleDown} style={{color
                :"grey"}} /></li>
                <li>Pricing <FontAwesomeIcon icon={faAngleDown} style={{color
                :"grey"}}/></li>
              </ul>
            </div>
          </div>
          <div className="right_nav">
            <div className="search">
              <input type="text" placeholder="Search" />
            </div>
            <div className="signup_button">
              <button className="signup_btn">Sign up</button>
            </div>
            <div className="signup_button">
              <button className="signup_btn">Sign In</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header