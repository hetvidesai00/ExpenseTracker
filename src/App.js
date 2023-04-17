import ExpenseItem from "./Components/ExpenseItem";

function App() {

  const expenses = [
    {
      id :'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date (2023, 4, 11)
    },
    {
      id :'e2',
      title: 'New TV',
      amount: 799.99,
      date: new Date (2023, 1, 5)
    },
    {
      id :'e3',
      title: 'Car Insurance',
      amount: 27.77,
      date: new Date (2023, 5, 20)
    },
    {
      id :'e4',
      title: 'New Desk',
      amount: 9.12,
      date: new Date (2023, 10, 2)
    },
  ]
  return (
    <div className="App">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
