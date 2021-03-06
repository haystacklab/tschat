import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { Bank } from './state/models';

function App() {

  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch);
  const bank: Bank = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <h1>{bank.counter}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
