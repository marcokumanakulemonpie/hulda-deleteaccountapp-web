import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PreHeader from "./PreHeader";
import Header from "./Header";
import Footer from "./Footer";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../sass/custom.scss";

function Confirm() {
  const [queryParameters] = useSearchParams();
  const navigate = useNavigate();

  // Verifica se ci sono parametri nella query string
  const hasParameters = queryParameters && queryParameters.toString() !== "";

  // Effettua il reindirizzamento automatico alla homepage quando non ci sono parametri
  useEffect(() => {
    if (!hasParameters) {
      navigate("/");
    }
  }, [hasParameters, navigate]);

  return (
    <div className='ConfirmPage'>
      <div className='sticky'>
        <PreHeader />
        <Header />
        <div className='container py-5'>
          <div className='row'>
            <div className=' col-11 col-lg-8'>
              {hasParameters ? (
                <>
                  <h1 className='mb-3'>Account eliminato</h1>
                  <p>
                    Abbiamo eliminato il tuo account{" "}
                    <strong>{queryParameters.get("email")}</strong> e i relativi
                    dati ad esso associati.
                  </p>
                  <p>
                    Torna alla home cliccando{" "}
                    <a
                      href='https://www.hulda.life/'
                      className='email_reload'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {" "}
                      QUI
                    </a>
                  </p>
                </>
              ) : (
                <p>Nessun parametro nella query string.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Confirm;
