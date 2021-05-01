import ExpenseItem from './ExpenseItem';
import {useState} from 'react';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const selectedYearHandler = (event) => {
        setSelectedYear(event.target.value);
    }

    return (
        <header className="App-header border grid mt-5 mx-auto rounded w-1/2">
            <select
                className="border mt-11 mx-5 p-2 rounded"
                selected={selectedYear}
                onChange={selectedYearHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>

            {props.items.map(
                expense => <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            )}
        </header>
    );
}

export default Expenses;
