import './App.css';
import ExpenseItem from './components/ExpenseItem';

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

    console.log(data[0].date.toISOString())

    return (
        <div className="App">
            <header className="App-header grid">
                <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date}></ExpenseItem>
                <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date}></ExpenseItem>
                <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date}></ExpenseItem>
            </header>
        </div>
    );
}

export default App;
