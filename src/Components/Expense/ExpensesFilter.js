import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropDownHandller = (event)=>{
        props.onFilter(event.target.value)
    }
  return (
    <div className='expenseFilter'>
      <div className='expensesFilterLabel'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownHandller}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;