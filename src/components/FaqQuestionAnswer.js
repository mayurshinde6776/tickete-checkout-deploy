// FaqQuestionAnswer.js
import React from 'react';
import '../css/FaqQuestionAnswer.css'
function FaqQuestionAnswer({ question, answer, isExpanded, onClick }) {
  return (
    <div className="faq-question-answer m-2">
      <div className={`question ${isExpanded ? 'expanded' : ''}`} onClick={onClick}>
        <span className={`toggle-icon ${isExpanded ? 'minus' : 'plus'}`}></span>
       <h3 className='faqQuestions'>{question}</h3> 
      </div>
      {isExpanded && (
        <div className="faq-answer-div">
          <p className='answers'>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FaqQuestionAnswer;
