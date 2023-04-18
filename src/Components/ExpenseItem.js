import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expenseItem">
        <ExpenseDate date={props.date}/>
        <div className="expenseItemDescription">
            <h2>{props.title}</h2>
            <div className="expenseItemPrice">${props.amount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
