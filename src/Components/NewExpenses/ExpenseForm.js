
import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=> {
    const[titleForm, setTitleForm] = useState('');
    const[amountForm, setAmountForm] = useState("");
    const[dateForm, setDateForm] = useState("");
    const[errorMessage, setErrorMessage] = useState("");

    const textHandler = (event) =>{
        setTitleForm(event.target.value)
        console.log(titleForm)
    }
    
    const amountHandler =(event)=>{
        setAmountForm(event.target.value)
    }

    const dateChangeHandler = (event)=>{
        setDateForm(event.target.value)
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        if(titleForm.trim().length === 0)
        {
            setErrorMessage("Enter The Title")
        }else if (amountForm.length==0){
            setErrorMessage("Enter The Amount")
        }
        else{
            setErrorMessage("")
            setDateForm()
        }
        props.addExpenseValue(titleForm, amountForm, dateForm)
        setTitleForm("")
        setAmountForm("")
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className='newExpense'>
                <div className='newExpenseValues'>
                    <label>Title</label>
                    <input type='text' value={titleForm} onChange={textHandler}/>
                </div>
                <div className='newExpenseValues'>
                    <label>Ammount</label>
                    <input type='number' min="0.01" step="0.01" value={amountForm} onChange={amountHandler}/>
                </div>
                <div className='newExpenseValues'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-01-01" value={dateForm} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div >
                <button type='submit' className='newExpenseAction'>Add Expense</button>
            </div>
        </form>
        {errorMessage}
    </div>
  )
}

export default ExpenseForm