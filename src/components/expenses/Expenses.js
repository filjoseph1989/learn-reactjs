import ExpenseItem from './ExpenseItem';
import {useState} from 'react';

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021');

    const selectedYearHandler = (event) => {
        setSelectedYear(event.target.value);
    }

    return (
        <header className="App-header grid mx-auto w-1/2">
            <select
                className="border mt-11 p-2 rounded"
                selected={selectedYear}
                onChange={selectedYearHandler}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>

            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date} />

            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date} />

            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date} />
        </header>
    );
}

export default Expenses;
