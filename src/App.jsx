import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';


const App = () => {
  const [expression, setExpression] = useState('');

  // const handleAppend = (e) => {
  //   setExpression(expression + e.target.innerHTML);
  // };

  const handleAppend = (value) => {
    setExpression(expression + value);
  };
  const handleEqual = () => {
    setExpression(eval(expression));
  };

  // const handleDel = () => {
  //   setExpression(expression.slice(0, -1));
  // };

  const handleDel = () => {
    let newExp = expression;
    if (typeof newExp !== 'string') {
      newExp = expression.toString();
    }
    setExpression(newExp.slice(0, -1));
  };

  const handleAC = () => {
    setExpression('');
  };

  return (
    <>
      <div>
        <div>
          <h1>Calculator app</h1>
        </div>


        <div className='Calculator'>
          <div>
            <Display name="display" display={expression} />
          </div>
          <div>
            <div className='row first-row'>
              <button className='cnBtn' onClick={handleAC}>AC</button>
              <button className='cnBtn' onClick={handleDel}>Del</button>
              <button className='fnBtn' onClick={() => handleAppend('/')}>/</button>
            </div>
            <div className='row second-row'>
              <button className='numBtn' onClick={() => handleAppend(7)}>7</button>
              <button className='numBtn' onClick={() => handleAppend(8)}>8</button>
              <button className='numBtn' onClick={() => handleAppend(9)}>9</button>
              <button className='fnBtn' onClick={() => handleAppend('*')}>*</button>
            </div>
            <div className='row third-row'>
              <button className='numBtn' onClick={() => handleAppend(4)}>4</button>
              <button className='numBtn' onClick={() => handleAppend(5)}>5</button>
              <button className='numBtn' onClick={() => handleAppend(6)}>6</button>
              <button className='fnBtn' onClick={() => handleAppend('-')}>-</button>
            </div>
            <div className='row fourth-row'>
              <button className='numBtn' onClick={() => handleAppend(1)}>1</button>
              <button className='numBtn' onClick={() => handleAppend(2)}>2</button>
              <button className='numBtn' onClick={() => handleAppend(3)}>3</button>
              <button  className='fnBtn' onClick={() => handleAppend('+')}>+</button>
            </div>
            <div className='row fifth-row'>
              <button className='numBtn' onClick={() => handleAppend(0)}>0</button>
              <button className='numBtn' onClick={() => handleAppend('.')}>.</button>
              <button  className='fnBtn' onClick={handleEqual}>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;