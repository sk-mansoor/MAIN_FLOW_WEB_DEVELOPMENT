import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      setResult(eval(input)); // Note: eval is used here for simplicity, but it's not recommended for production use due to security risks.
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '/', '*', '-', '+', '=', '.','00'].map((value) => (
          <Button key={value} value={value} onClick={value === '=' ? handleEqual : () => handleClick(value)} />
        ))}
        <Button value="C" onClick={handleClear} />
      </div>
    </div>
  );
};

export default Calculator;
