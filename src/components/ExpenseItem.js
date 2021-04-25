import './ExpenseItem.css';

function ExpenseItem (props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="bg-purple-300 border grid m-5 mt-5 p-5 rounded">
            <div className="grid grid-cols-3">
                <div className="flex font-bold items-center justify-start text-lg">
                    <div>
                        <div>{month}</div>
                        <div>{day}</div>
                        <div>{year}</div>
                    </div>
                </div>
                <div className="flex font-bold items-center justify-start text-lg">{props.title}</div>
                <div className="border flex font-bold justify-center p-2 rounded">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
