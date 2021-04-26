import './App.css';
import Expenses from './components/Expenses';

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

    return (
        <div className="App">
            <Expenses items={data} />
        </div>
    );
}

export default App;
