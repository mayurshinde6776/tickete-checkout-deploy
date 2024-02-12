import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcDinersClub } from '@fortawesome/free-brands-svg-icons';

import '../css/CreditDebit.css';
import TotalPayable from './TotalPayable';

function CreditDebit() {
  return (
    <div className='container Credit-Debit-Box' style={{ border:' 2px solid gray'}}>
<div className='credit-debit-container'>
      <p className='credit-debit-text'>
        <FontAwesomeIcon icon={faCreditCard} className='credit-card-icon'  />
        Credit and Debit Card
      </p>
      <div className='align-item-end'>
        <FontAwesomeIcon icon={faCircle} className='radio-icon' />
      </div>
      <div>
      </div>
    </div>
    <div className='brand-icons'>
        <FontAwesomeIcon icon={faCcVisa} style={{ color:' #00579F'}} className='brand-icon' />
        <FontAwesomeIcon icon={faCcMastercard} className='brand-icon' style={{color:'#ed0006'}} />
        <FontAwesomeIcon icon={faCcDinersClub} className='brand-icon' style={{color:'#0079BE'}} />
      </div>

      <div className="details-form">      
                  <div className="row mb-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Name on Card*" required />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Card Number*" required />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Expiery Date*" required />
                    </div>
                    <div className="col">
                      <input type="email" className="form-control" placeholder="<CVV>/<CVC>*" required />
                    </div>
                  </div>
                </div>

                <TotalPayable/>
    </div>
  );
}

export default CreditDebit;
