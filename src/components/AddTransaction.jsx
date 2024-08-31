import React from "react";
import { useState , useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount //convert to number
        }
        //disappear the content of the input fields after submit
        setText('');
        setAmount(0);

        addTransaction(newTransaction);


        
    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount}
           onFocus={(e)=>{if(e.target.value === '0') e.target.value = ''}} //if the input field is 0, it will be empty
           onBlur={(e)=>{if(e.target.value === '') e.target.value = 0}} //if the input field is empty, it will be 0
           onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
