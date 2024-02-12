import React, { useState } from 'react';
import '../css/FrequentQuestions.css';
import chatImage from '../images/chat2.png';
import FaqQuestionAnswer from './FaqQuestionAnswer';
import { Button, Col, Row } from 'react-bootstrap';

import faqData from '../Data/faqData';

function FrequentQuestions(props) {
  const [visibleQuestions, setVisibleQuestions] = useState([]);

  const toggleQuestion = (index) => {
    setVisibleQuestions((prevVisible) => {
      const newVisible = [...prevVisible];
      newVisible[index] = !newVisible[index];
      return newVisible;
    });
  };

  return (
    <div className="container">
      <Row> 
        {/* Left Column */}
        <Col md={6} >
          <div>
            <h2 className="faq-heading">Frequently asked questions</h2>
            <p className="faq-sub-heading">Here are some of our most asked questions. </p>
          </div>
          <Row className="chat-section">
            <Col md={6}>
              <h5 className="chat-heading">Still need help? We’re here for you.</h5>
              <Button variant="dark" className="chat-button">
                <span className="chat-button-text">Chat with us</span>
              </Button>
            </Col>
            <Col md={6}>
              <img src={chatImage} alt="Chat" className="img-fluid chat-image" />
            </Col>
          </Row>
        </Col>

        {/* Right Column */}
        <Col md={6}>
          {/* Questions and Answers */}
          <Row className="justify-content-md-center"> {/* Center the columns on medium screens and larger */}
            {faqData.map((faq, index) => (
              <Col key={index} xs={12} className="mb-4"> {/* On extra small screens, take up the full width and add bottom margin */}
                <div className="question-container">
                  <FaqQuestionAnswer
                    question={faq.question}
                    answer={faq.answer}
                    isExpanded={visibleQuestions[index]}
                    onClick={() => toggleQuestion(index)}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default FrequentQuestions;
