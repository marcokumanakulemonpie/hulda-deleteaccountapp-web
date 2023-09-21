import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../assets/img/logo.png"

function Footer() {
  return (
    <div className='footer py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p>
              Hulda Italia S.R.L. – SB | sede legale Milano (MI) Via Zuretti 34
              CAP 20125
              <br></br>
              <br></br>
              CF e P.IVA 12461880960 | www.hulda.life |{" "}
              <a
                href='https://www.hulda.life/privacy-policy/'
                target='_blank'
                rel='noreferrer'
              >
                Privacy Policy
              </a>{" "}
              |{" "}
              <a
                href='https://www.hulda.life/cookie-policy/'
                target='_blank'
                rel='noreferrer'
              >
                Cookie Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
