import ExpenseItem from './ExpenseItem';
import {useState} from 'react';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2018');

    const selectedYearHandler = (event) => {
        setSelectedYear(event.target.value);
    }

    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    let expenseContent = <p className="border mx-5 my-2.5 p-2">Item not found!</p>;

    if (filterExpenses.length > 0) {
        expenseContent = filterExpenses.map(
            expense => {
                return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />
            }
        );
    }

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

            {expenseContent}
        </header>
    );
}

export default Expenses;
