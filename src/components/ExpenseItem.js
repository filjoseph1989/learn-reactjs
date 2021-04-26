// import './ExpenseItem.css'; to be able to add css just do this line and create file of it
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {
    return (
        <div className="bg-purple-300 border grid m-5 mt-5 p-5 rounded">
            <div className="grid grid-cols-3">
                <ExpenseDate date={props.date} />
                <div className="flex font-bold items-center justify-start text-lg">{props.title}</div>
                <div className="border flex font-bold items-center justify-center p-2 rounded">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
