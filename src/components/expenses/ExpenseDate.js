function ExpenseDate (props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day   = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year  = props.date.getFullYear();

    return (
        <div className="flex font-bold items-center justify-start text-lg">
            <div className="border grid p-2 rounded">
                <div className="justify-self-center">{month}</div>
                <div className="justify-self-center">{day}</div>
                <div className="justify-self-center">{year}</div>
            </div>
        </div>
    );
}

export default ExpenseDate;
