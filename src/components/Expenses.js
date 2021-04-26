import ExpenseItem from './ExpenseItem';

function Expenses() {
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
        <header className="App-header grid mx-auto w-1/2">
            <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date} />
            <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date} />
            <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date} />
        </header>
    );
}

export default Expenses;