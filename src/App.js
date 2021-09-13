import React, { useState } from "react"; // in modern react Projects we don't need to import React in every component. We can skip it
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // this code is the way react transform the below code
  // return(
  //   React.createElement('div', {} ,
  //   React.createElement('h2', {}, "lets get started"),
  //   React.createElement(Expenses, {items:expenses})
  //   )
  // );
  const addExpenseHandler = (expense) => {
    // if you update the state depending on the previous state, the you should use this special function form
    // we pass function as argument to state update function and that function will automatically receive the latest state snapshot
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    //setExpenses([expense, ...expenses]);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
