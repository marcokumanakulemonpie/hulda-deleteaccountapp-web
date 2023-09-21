import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Form() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false); // Stato per la checkbox di privacy

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setResponseMessage("Inserisci un indirizzo email valido");
      return;
    }

    if (!privacyChecked) {
      setResponseMessage("Devi accettare la privacy policy per procedere");
      return;
    }

    setLoading(true);

    try {
      // Costruisci l'URL dell'API con il parametro email
      const apiUrl = `https://hulda-life-d-api-westeu-001.azurewebsites.net/api/v1/login/user/${encodeURIComponent(
        email
      )}`;

      // Invia la richiesta all'API utilizzando il metodo GET
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // setResponseMessage("Operazione effettuata con successo");
        // Esegui il reindirizzamento qui
        navigate("/success");
      } else {
        navigate("/error");
      }
    } catch (error) {
      console.error("Errore nella richiesta API:", error);
      setResponseMessage("Errore nella richiesta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container pt-2 pb-5'>
      <div className='row d-flex align-items-center justify-content-start'>
        <div className='col-lg-6 pb-3'>
          <h1>VUOI CANCELLARE IL TUO ACCOUNT?</h1>
          <p>
            Questa operazione è irreversibile, tutti i dati relativi al tuo
            account verranno eliminati e non saranno conservati.
          </p>
        </div>
        <div className='col-lg-4 offset-xl-1 pb-3'>
          <form
            className='form_email text-center p-5 shadow'
            onSubmit={handleSubmit}
          >
            <h4 className='pb-3'>ELIMINA ACCOUNT</h4>
            <label htmlFor='email'></label>
            <input
              type='email'
              name='email'
              id='email'
              className='email_input w-100'
              value={email}
              placeholder='Inserisci email'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <div className="text-start">
            <input
              type='checkbox'
              id='privacyCheckbox'
              checked={privacyChecked}
              onChange={() => setPrivacyChecked(!privacyChecked)}
              required
            />
            <label htmlFor='privacyCheckbox' className="ps-2 checkboxText">
              Accetto la vostra{" "}
              <a
                href='https://www.hulda.life/privacy-policy/'
                target='_blank'
                rel='noreferrer'
              >
                privacy policy
              </a>
            </label>
            </div>
            <input
              className='btn_submit mt-3'
              type='submit'
              value='Elimina account'
              disabled={loading}
            />
            <div className='response'>
              {loading && <p>Caricamento...</p>}
              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
