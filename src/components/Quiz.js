import React, { useState } from 'react';
import { Highlight } from '@site/src/components/Highlight';

const Quiz = ({ title, choices, remarks, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [result, setResult] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    // Calculate and display the remark immediately when a radio button is clicked
    calculateAndDisplayRemark(event.target.value);
  };

  const calculateAndDisplayRemark = (selectedValue) => {
    // Check if selected option is correct and set the remark and result color accordingly
    const isCorrect = correctAnswer.includes(parseInt(selectedValue));
    const remarkIndex = parseInt(selectedValue);
    const remark = remarks[remarkIndex];
    setResult(
      <div className="card-body">
        {isCorrect ? <Highlight color="#009500">👍 {remark}</Highlight> : <Highlight color="#d13818">😵 {remark}</Highlight>}
      </div>
    );
  };

  return (
    <div className="card">
      <h2 className="card-title">🤔{title}</h2>
      <div className="card-body">
        <form>
          {choices.map((choice, index) => (
            <label key={index} className="choice" style={{ display: 'block', margin: '5px' }}>
              <input
                type="radio"
                value={index}
                checked={selectedOption === index.toString()}
                onChange={handleRadioChange}
              />
              {choice}
            </label>
          ))}
        </form>
        {result}
      </div>
    </div>
  );
};

export default Quiz;
