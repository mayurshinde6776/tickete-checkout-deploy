// CheckOut.js

import React from 'react';
import FrequentQuestions from './FrequentQuestions';
import '../css/CheckOut.css';
import Cards from './Cards';
import TotalPayable from './TotalPayable';
import CreditDebit from './CreditDebit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApplePay, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function CheckOut(props) {
  return (
    <div>
      <div className="heading-container">
        <p className='heading-container-p'>Holding Your Tickets for 30:00</p>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 col-lg-8  ">
            <div className="frame">
              <div className="heading-section">
                <div className="confirm-pay-text">Confirm & Pay</div>
              </div>
              <Container className='my-3 info-section'>
                <Row>
                  <Col xs={12} md={10} className='order-md-1 d-flex align-items-center'>
                    <div className='p-2'>
                      <div className='free-cancel'>
                        Free cancellation -
                      </div>
                      <div className='free-cancel-subtext'>
                        Tickets can be cancelled by 13th December, 2022.
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={2} className='order-md-2 d-flex align-items-center justify-content-end'>
                    <FontAwesomeIcon icon={faInfoCircle} className='info-section-icon' />
                  </Col>
                </Row>
              </Container>


              <div className="details-frame">
                <div className='details-heading-div'>
                  <div className='details-heading'>
                    Enter your details
                    <p className='details-para'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
                  </div>
                </div>

                <div className="details-form">
                  <div className="mb-3 position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name *"
                      required
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Country Code *" required />
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Phone Number *" required />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Email *" required />
                    </div>
                    <div className="col">
                      <input type="email" className="form-control" placeholder="Confirm Email *" required />
                    </div>
                  </div>
                </div>
              </div>



              <div className="details-frame">
                <div className='details-heading-div'>
                  <div className='details-heading'>
                    Additional information
                    <p className='details-para'>We need a few more details to complete your reservation.</p>
                  </div>
                </div>
                <div className="details-form">

                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        id="labelInput"
                        placeholder="label Input*"
                        required
                      />
                    </div>

                    <div className="col">
                      <select className="form-select" required>
                        <option value="" disabled selected>Select*</option>
                      </select>
                      <span className="bi bi-chevron-down dropdown-icon"></span>
                    </div>

                  </div>

                  <div className="mb-3 position-relative">
                    <select className="form-select" required>
                      <option value="" disabled selected>Multiselect*</option>
                      <option value="option1">Option 1</option>
                    </select>
                    <span className="bi bi-chevron-down dropdown-icon"></span>
                  </div>


                </div>

                <hr style={{ color: '#DDDDE3', border: '1px solid #DDDDE3' }} />
              </div>

              <div className='details-heading-div'>
                <div className='details-heading'>
                  Select your mode of payment
                  <p className='details-para'>Payments with Tickete are secure and encrypted.</p>
                </div>
              </div>
            </div>

{/* for card details section created separate component and impoted here */}
            <CreditDebit />
{/* comming soon two fields */}
            <Container className='mt-3'>
              <Row>
                <Col xs={12} md={6} lg={12}>
                  <div className='coming-container styled-div'>
                    <p className='coming-text'>
                      <FontAwesomeIcon icon={faApplePay} className='apple-icon' />
                      <span> Coming Soon</span>
                    </p>
                    <div className='align-item-end'>
                      <FontAwesomeIcon icon={faCircle} className='coming-radio-icon' />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container className='mt-3'>
              <Row>
                <Col xs={12} md={6} lg={12}>
                  <div className='coming-container styled-div'>
                    <p className='coming-text'>
                      <FontAwesomeIcon icon={faGooglePay} className='apple-icon' />
                      <span> Coming Soon</span>
                    </p>
                    <div className='align-item-end'>
                      <FontAwesomeIcon icon={faCircle} className='coming-radio-icon' />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <hr className="horizontal-line mt-3" />

{/* Total payabale section started here */}
            <Container>
              <div className='details-heading-div mb-2'>
                <div className='details-heading'>
                  Total Payable: $XXX
                </div>
              </div>
              <Container className='info-container'>
                <Row>
                  <Col xs={12} md={2} className='info-icon'>
                    <FontAwesomeIcon icon={faInfoCircle} className='info-section-icon' />
                  </Col>
                  <Col xs={12} md={10} className='info-content'>
                    <h3 className='info-heading'>You will be charged in AED</h3>
                    <p className='info-subheading'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
                  </Col>
                </Row>
              </Container>
              <hr className="horizontal-line mt-3" />
            </Container>

          </div>
          {/* right column */}
          <div className="col-md-12 col-lg-4">
            <div className='right-column' >
              {/* Crads and totalpayabale components created separately and added here */}
              <Cards />
              <TotalPayable />
            </div>
          </div>


        </div>
      </div>

      <div >
        {/* FAQ section created in separate component and added here */}
        <FrequentQuestions />
        <hr className="horizontal-line mb-5" />
      </div>
    </div>
  );
}

export default CheckOut;
