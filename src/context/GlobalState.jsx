import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial State
// const initialState = {
//     transactions: [
//         //   { id: 1, text: 'Flower', amount: -20 },
//         //   { id: 2, text: 'Salary', amount: 300 },
//         //   { id: 3, text: 'Book', amount: -10 },
//         //   { id: 4, text: 'Camera', amount: 150 }
//         ]
// }

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

//create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  // Save transactions to localStorage whenever state.transactions changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
