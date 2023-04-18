import React, {useState} from "react";
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem =(props) => {
     const [title, setTitle] = useState(props.title);
    const clickHandller =()=>{
       setTitle('Updated');
    }

    return (
        <div className="expenseItem">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expenseItemDescription">
            <h2>{title}</h2>
            </div>
            <div className="expenseItemPrice">${props.amount}</div>
            <button onClick={clickHandller}> Click </button>
        </div>
    )
}

export default ExpenseItem