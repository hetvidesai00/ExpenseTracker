import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense =()=>{
    

    const addFinalExpense =(finalTitle, finalAmount, finalDate)=>{

    }
return(
    <div className="expenseDisplay">
        <ExpenseForm addExpenseValue={addFinalExpense}></ExpenseForm>
    </div>
)
}

export default NewExpense