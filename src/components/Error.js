import React from "react";
import { Link } from "react-router-dom";
import PreHeader from "./PreHeader";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../sass/custom.scss";

function Error() {
  return (
    <div className='ErrorPage'>
      <div className='sticky'>
        <PreHeader />
        <Header />
        <div className='container py-5'>
          <div className='row'>
            <div className='col-11 col-lg-8'>
              <h1 className='mb-3'>Ops!</h1>
              <p>
                Qualcosa è andato storto, sei sicuro di aver inserito
                l'indirizzo corretto?
              </p>
              <p>
                Riprova cliccando{" "}
                <Link to='/' className='email_reload'>
                  QUI
                </Link>{" "}
                altrimenti{" "}
                <a
                  href='https://www.hulda.life/contatti/'
                  target='_blank'
                  className='email_reload'
                  rel='noreferrer'
                >
                  contattaci
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
