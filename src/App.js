import Expenses from "./components/Expenses";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 246.97,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 799.63,
      date: new Date(2021, 5, 14),
    },
    {
      id: "e4",
      title: "Shopping in Mart",
      amount: 322.45,
      date: new Date(2021, 5, 14),
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
