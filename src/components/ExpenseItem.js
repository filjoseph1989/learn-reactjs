import './ExpenseItem.css';

function ExpenseItem () {
    return (
        <div className="bg-purple-300 border grid m-5 mt-5 p-5 rounded w-1/2">
            <div className="grid grid-cols-3">
                <div className="flex font-bold items-center justify-start text-lg">April 21, 2021</div>
                <div className="flex font-bold items-center justify-start text-lg">Insurance</div>
                <div className="border flex font-bold justify-center p-2 rounded"> $100.00 </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
