import React from "react";
import './ExpenseDate.css';

function ExpenseDate(props){
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-GB',{ day: '2-digit'});

    return (
        <div className="expenseDate">
            <div className="expenseDateMOnth">{props.date.toLocaleString('en-GB',{ month: 'long'})}</div>
            <div className="expenseDateYear">{year}</div> 
            <div className="expenseDateDay">{day}</div>
        </div>
    )
}

export default ExpenseDate