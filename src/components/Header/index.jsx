import React from 'react'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="nav_header">
        <div className="align_center">
          <div className="left_nav">
            <div className="logo">
              <img src={require("./logo.png")} 
               alt=""
               style={{backgroundColor: 'white',
              borderRadius: "50%" 

              }}
               />
            </div>
            <div className="menu">
              <ul>
                <li>Product <FontAwesomeIcon style={{color
                :"white"}}/></li>
                <li>Solutions <FontAwesomeIcon /></li>
                <li>Open Source <FontAwesomeIcon /></li>
                <li>Pricing <FontAwesomeIcon /></li>
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