// Cards.js
import React from 'react';
import { Card } from 'react-bootstrap';
import cardsData from '../Data/cardsData';
import '../css/Cards.css';

export default function Cards() {
  return (
    <div>
      <div className="row">
        {cardsData.map((card) => (
          <div className=" " key={card.id}>
            {/* Bootstrap Card */}
            <Card className="inner-div border-0" style={{ gap: '24px' }}>
              {/* Card Image */}
              <Card.Img variant="top" src={card.imageSrc} className="img-fluid" style={{height:'198px'}} />

              {/* Card Body */}
              <Card.Body style={{ gap: '2px' }}>
                <div className="star-rating">
                  {card.starRating}. <span className="category">{card.category}</span>
                </div>

                <Card.Title className="card-title">{card.title}</Card.Title>

                <div className="listing-section">
                  {/* List Items */}
                  <ul className="list-unstyled">
                    <li className="list-item">
                      {typeof window !== 'undefined' && window.bootstrap ? (
                        <i className="bi bi-ticket ticket-icon"></i>
                      ) : (
                        <i className="fas fa-ticket-alt ticket-icon"></i>
                      )}
                      {card.ticketType}
                    </li>
                    <li className="list-item">
                      {typeof window !== 'undefined' && window.bootstrap ? (
                        <i className="bi bi-calendar date-icon"></i>
                      ) : (
                        <i className="fas fa-calendar date-icon"></i>
                      )}
                      <span className="date-content">{card.date}</span>
                    </li>
                    <li className="list-item">
                      {typeof window !== 'undefined' && window.bootstrap ? (
                        <i className=" date-icon"></i>
                      ) : (
                        <i className=" date-icon"></i>
                      )}
                      <div className="duration-value">{card.duration}</div>
                    </li>
                    <li className="list-item-3">
                      {typeof window !== 'undefined' && window.bootstrap ? (
                        <i className="bi bi-clock clock-icon"></i>
                      ) : (
                        <i className="fas fa-clock clock-icon"></i>
                      )}
                      <div>
                        <span className="time-values">{card.time}</span>
                      </div>
                    </li>
                    <li className="list-item-3">
                      {typeof window !== 'undefined' && window.bootstrap ? (
                        <i className=" clock-icon ml-2"></i>
                      ) : (
                        <i className=" clock-icon ml-2"></i>
                      )}
                      <span className="operating-hours">{card.operatingHours}</span>
                    </li>
                    <li className="last-list-item">
                      {typeof window !== 'undefined' && window.bootstrap ? (
                        <i className="bi bi-person guest-icon"></i>
                      ) : (
                        <i className="fas fa-user guest-icon"></i>
                      )}
                      <h6 className="guest-text">{card.guests}</h6>
                    </li>
                  </ul>
                  <hr />
                  <u>
                    <div className='row'>
                      <div className='col-8'>
                        <h5 className='payment-summary'>
                          View Payment Summary
                        </h5>
                      </div>
                      <div className='col-4 plus-sign'>
                        <span> + </span>
                      </div>
                    </div>
                  </u>
                  {/* Additional content */}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
