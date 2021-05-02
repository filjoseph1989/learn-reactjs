import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import {useState} from 'react';

const initialData = [
    {
        id: 1,
        title: 'Car Insurance',
        amount: 299.00,
        date: new Date(2019, 11, 24)
    },
    {
        id:2,
        title: 'House Insurance',
        amount: 499.00,
        date: new Date(2018, 11, 24)
    },
    {
        id: 3,
        title: 'Life Insurance',
        amount: 999.00,
        date: new Date(2018, 11, 24)
    }
];

function App() {
    const [data, setData] = useState(initialData);

    const addNewExpenseHandler = (expenseSaveData) => {
        const saveData = {
            ...expenseSaveData,
            id: Math.random().toString()
        }

        setData(prevState => {
            let newArray = [saveData, ...prevState];
            return newArray;
        });
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addNewExpenseHandler} />
            <Expenses items={data} />
        </div>
    );
}

export default App;
