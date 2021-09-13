import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // instead of adding thre states u can add only one object state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  // when change event occurs browser insure to give us a event object that contain the value
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // 2 alternatives for handeling user inputs
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    /* if your state update depends on previous state, use this function form. 
    this will guarantee that it will give you the latest state snapshot*/
    // setUserInput((prevState) =>{
    //     return{
    //         ...prevState,
    //         enteredTitle: event.target.value,
    //     }
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

    return (
      /* if you have button with submit type ,it's better to to put onSubmit event 
      to submit the form instead of add onClick to the button of the form*/
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel}>cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  
};

export default ExpenseForm;
