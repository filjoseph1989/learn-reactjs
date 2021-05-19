import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    return
    <div className="rounded border grid mt-11 mx-auto p-5 w-1/2">
        <ExpenseForm onSaveExpenseData={props.onAddExpense} />
    </div>
}

export default NewExpense;
