import React from "react";
import './ExpenseItem.css'

function ExpenseItem(props) {

    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-GB',{ day: '2-digit'});
    return (
        <div className="expenseItem">
            <div className="expenseItemDescription">
                <div>{props.date.toLocaleString('en-GB',{ month: 'long'})}</div>
                <div>{year}</div> 
                <div>{day}</div>
                </div>
            <div className="expenseItemTitle">
            <h2>{props.title}</h2>
            </div>
            <div className="expenseItemPrice">${props.amount}</div>
        </div>
    )
}

export default ExpenseItem