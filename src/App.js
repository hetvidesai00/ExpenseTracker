
import Expenses from "./Components/Expenses";
import './App.css'

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
      <Expenses items={expenses}></Expenses>
         </div>
  );
}

export default App;
