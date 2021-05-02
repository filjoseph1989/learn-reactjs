import ExpensesList from './ExpensesList';
import {useState} from 'react';

const Expenses = props => {
    const [selectedYear, setSelectedYear] = useState('2018');

    const selectedYearHandler = (event) => {
        setSelectedYear(event.target.value);
    }

    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <header className="App-header border grid mt-5 mx-auto rounded w-1/2">
            <select
                className="border mt-3 mx-5 p-2 rounded"
                selected={selectedYear}
                onChange={selectedYearHandler}>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
            </select>

            <ExpensesList items={filterExpenses} />
        </header>
    );
}

export default Expenses;
