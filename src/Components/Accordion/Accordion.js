import React, { useState } from 'react';
import './Accordion.css';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      id: 1,
      question: "How Can Aria Help Your Business",
      answer: "At Aria solutions, we’ve taken the consultancy concept one step further by offering a full service management organization with expertise."
    },
    {
      id: 2,
      question: "Great Strategic Business Planning",
      answer: "Aria partners with businesses to business growth and development ideas including environment analysis, plan execution and evaluation."
    },
    {
      id: 3,
      question: "Business Process Improvement",
      answer: "Aria partners with businesses to business growth and development ideas including environment analysis, plan execution"
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='accordion'>
      {data.map((item, index) => (
        <div className='accordion-item' key={item.id}>
          <div 
            className='accordion-title' 
            onClick={() => handleClick(index)}
          >
            <span className='accordion-index'>{index+1}</span>
            {item.question}
          </div>
          <div 
            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
