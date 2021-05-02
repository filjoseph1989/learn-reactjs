import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    if (props.items.length == 0) {
        return <p className="border mx-5 my-2.5 p-2">Item not found!</p>;
    }

    return props.items.map(expense => {
        return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
    });
}

export default ExpensesList;

