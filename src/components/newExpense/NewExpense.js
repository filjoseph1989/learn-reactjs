import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const expenseSaveDataHandler = (expenseData) => {
        const expenseSaveData = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseSaveData);
    };

    return <div className="rounded border grid mt-11 mx-auto p-5 w-1/2">
        <ExpenseForm onSaveExpenseData={expenseSaveDataHandler} />
    </div>
}

export default NewExpense;
