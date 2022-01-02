import ExpenseItem from './components/Expenseltem';
import './App.css';

function App() {
  const expenses = [
    {
      id : 'e1', 
      title : 'Toilet Paper', 
      amount : 94.12, 
      date : new Date(2020, 7, 14)
    },
    {
      id : 'e2',
      title : 'Car Insurance', 
      amount : 246.97, 
      date : new Date(2021, 2, 28)
    },
    {
      id : 'e3', 
      title : 'New TV', 
      amount : 799.63, 
      date : new Date(2021, 5, 14)
    },
    {
      id : 'e4', 
      title : 'Shopping in Mart', 
      amount : 322.45, 
      date : new Date(2021, 5, 14)
    },
  ]
  return (
    <div className="App">
     <h2>Let's get started!</h2>
     <ExpenseItem 
      title={expenses[0].title} 
      amount ={expenses[0].amount} 
      date={expenses[0].date}
      ></ExpenseItem>

        <ExpenseItem 
        title={expenses[1].title} 
        amount ={expenses[1].amount} 
        date={expenses[1].date}
          ></ExpenseItem>
          <ExpenseItem 
          title={expenses[2].title} 
          amount ={expenses[2].amount} 
            date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem 
            title={expenses[3].title} 
            amount ={expenses[3].amount} 
            date={expenses[3].date}
              ></ExpenseItem>
    </div>
  );
}

export default App;
