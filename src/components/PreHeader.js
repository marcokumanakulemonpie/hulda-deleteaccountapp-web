import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function PreHeader(){
    return (
      <div className='preheader'>
        <div className='container'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-auto cta_call'>
              <a className='btn btn_call' href='tel:800957760'>
                CHIAMA ORA 800.957.760
              </a>
            </div>
            <div className='col-auto faq_section'>
              <a
                href='https://www.hulda.life/faq/'
                target='_blank'
                rel='noreferrer'
              >
                Supporto e FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PreHeader;