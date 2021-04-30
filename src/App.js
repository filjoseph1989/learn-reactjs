import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

function App() {
    const data = [
        {
            title: 'Car Insurance',
            amount: 299.00,
            date: new Date(2018, 11, 24)
        },
        {
            title: 'House Insurance',
            amount: 499.00,
            date: new Date(2018, 11, 24)
        },
        {
            title: 'Life Insurance',
            amount: 999.00,
            date: new Date(2018, 11, 24)
        }
    ];

    const addNewExpenseHandler = (expenseSaveData) => {
        console.log(expenseSaveData);
        data.push(expenseSaveData);
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addNewExpenseHandler} />
            <Expenses items={data} />
        </div>
    );
}

export default App;
