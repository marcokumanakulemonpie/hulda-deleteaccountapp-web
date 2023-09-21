import React from "react";
import { Link } from "react-router-dom";
import PreHeader from "../components/PreHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../sass/custom.scss";

function Success() {
  return (
    <div className='SuccessPage'>
      <div className='sticky'>
        <PreHeader />
        <Header />
        <div className='container py-5'>
          <div className='row'>
            <div className=' col-11 col-lg-8'>
              <h1 className='mb-3'>Controlla la tua email!</h1>
              <p>
                Abbiamo ricevuto la tua richiesta di eliminazione account, per
                confermare l'operazione clicca sul link presente nella mail che
                ti è arrivata.
              </p>
              <p>
                Email non ricevuta?{" "}
                <Link to='/' className='email_reload'> Riprova
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

export default Success;
