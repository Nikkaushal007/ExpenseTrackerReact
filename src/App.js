import logo from './logo.svg';
import './App.css';
import NewExpense from './NewExpense/NewExpense';
import ExpenseItem from './ExpenseItem';

function App() {
  
  const expenses = [
    { title: 'Toilet Paper', amount: 200.55, date: new Date(2023, 1, 28)},
    { title: 'Car Insurance', amount: 296.55, date: new Date(2023, 4, 28)},
    { title: 'Bike Accessories', amount: 244.55, date: new Date(2023, 9, 28)},
    { title: 'Books', amount: 225.55, date: new Date(2023, 10, 28)},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          <NewExpense />
        </h2>
        <p>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;