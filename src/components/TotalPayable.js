import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons'; // Add the Lock icon
import { Button } from 'react-bootstrap'; 
import '../css/Totalpayable.css';

function TotalPayable() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <h5 className='total-payable-heading'>
            Total Payable
          </h5>
        </div>
        <div className='col-md-4 total-payable-amount text-md-right'>
          <span> $XXX </span>
        </div>
      </div>
      <div className='you-saved-section'>
        <p className='background-text align-item-center justify-content-center'>
          <span className='icon-container'>
            <FontAwesomeIcon icon={faPiggyBank} className='saved-icon' />
          </span>
          You Saved {'<price>'}
        </p>
      </div>

      <div>
        <p>
          <span className="charge-label"> You will be charged in AED </span>
          <span className="charge-icon">
            <i className="fas fa-info-circle"></i>
          </span>
        </p>

        <p className="paragraph-underline ">
          By clicking “confirm & pay”, you agree to{' '}
          <span className='paragraph-underline-span'>Tickete’s general terms and conditions and cancellation policy.</span>
        </p>

        {/* Use Bootstrap's Button component */}
        <Button variant="dark" className="confirm-pay-button mb-5"  style={{width:'100%'}} block>
          <FontAwesomeIcon icon={faLock} /> Confirm & pay
        </Button>
      </div>
    </div>
  );
}

export default TotalPayable;
