import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  selectName,
  selectPassword,
  setName,
  setPassword
} from './reduxPageToolkit';


import 'bootstrap/dist/css/bootstrap.min.css';



export function Counter() {
  const count = useSelector(selectCount);
  const name = useSelector(selectName);
  const password = useSelector(selectPassword);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [inputName, setInputName] = useState(name);
  const [inputPassword, setInputPassword] = useState(password);

  return (
    <div>
      <div>
      <button 
          type="button" className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
        type="button" className="btn btn-primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
        type="button" className="btn btn-outline-secondary"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
        type="button" className="btn btn-outline-secondary"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
          <p>
            name: 
            <span>{name}</span>
            <br></br>
            password: 
            <span>{password}</span>
            <br></br>

            <input
            aria-label="Set name"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
            />
            <br/>
            <input
            aria-label="Set password"
            value={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
            />
            <br/>
            <button
            type="button" className="btn btn-outline-success"
            onClick={() =>{
                dispatch(setName(String(inputName) || ''));
                dispatch(setPassword(String(inputPassword) || ''));

            }
                
            }
            >
            Set Name and password
            </button>
          </p>
        
      </div>
    </div>
  );
}

export default Counter;