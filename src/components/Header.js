import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../assets/img/logo.png"

function Header() {
  return (
    <div className='header py-4'>
      <div className='container'>
        <div className='row d-flex justify-content-between align-items-center'>
          <div className='col-12'>
            <a href='https://www.hulda.life/' target="_blank" rel="noreferrer">
              <img className='logo' src={logo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
