import React from 'react';
import {GlobalProvider} from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';



function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction/>
      </div>
        
    </GlobalProvider>
  );
}

export default App;
