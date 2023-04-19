import React,{useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense =(props)=>{

    const [value, setValue] = useState([])
    /* const addFinalExpense =(enetredExpenseData)=>{
        const expenseData = {
            ...enetredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
    } */

    const addFinalExpense = (finalTitle, finalAMount, finalDate)=>{
        setValue((...prevState)=>{
            return[...prevState, {title:finalTitle, amount:finalAMount, date:finalDate}]
        });
        props.addValueHandler(setValue)
    }
    console.log(value)
return(
    <div className="expenseDisplay">
        <ExpenseForm addExpenseValue={addFinalExpense}></ExpenseForm>
    </div>
)
}

export default NewExpense