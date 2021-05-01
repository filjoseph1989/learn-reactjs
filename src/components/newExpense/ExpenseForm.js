import {useState} from 'react';

const ExpenseForm = (props) => {
    // Here we accept object in useState() with properties that serve as
    // a container of inputs
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChangeHandler = (event) => {
        // Here we use spread ...userInput as we passed an object argument to
        // setUserInput(), to prevent losing data. This will create a new object
        setUserInput({
            ...userInput,
            title: event.target.value
        });
    };

    const amountChangeHandler = (event) => {
        // Here we passed an annonymous function. A safer way.
        setUserInput((preState) => {
            return {
                ...userInput,
                amount: event.target.value
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((preState) => {
            return {
                ...userInput,
                date: new Date(event.target.value)
            };
        });
    };

    // In this function you can use axios or fetch to pass data to server
    const submitHandler = event => {
        event.preventDefault();
        props.onSaveExpenseData({...userInput});

        // Used to re-empty input boxes
        setUserInput({
            ...userInput,
            title: '',
            amount: '',
            date: ''
        });
    }

    // Here we modify data that is that is compatible to input type=date format
    let dateInput = '';
    if (userInput.date !== '') {
        dateInput = userInput.date.toISOString().split('T')[0];
    }

    return <form onSubmit={submitHandler}>
        <div>
            <div className="flex flex-wrap">
                <div className="w-1/2">
                    <label>Title</label>
                    <input
                        value={userInput.title}
                        onChange={titleChangeHandler}
                        placeholder="enter title here"
                        className="border mx-11 my-3 p-1.5 w-2/3"
                        type="text" />
                </div>
                <div className="w-1/2">
                    <label>Amount</label>
                    <input
                        value={userInput.amount}
                        onChange={amountChangeHandler}
                        placeholder="enter amount here"
                        className="border mx-11 my-3 p-1.5 w-2/3"
                        type="number" min="0.01" step="0.01" />
                </div>
                <div className="w-1/2">
                    <label>Date</label>
                    <input
                        value={dateInput}
                        onChange={dateChangeHandler}
                        className="border mx-11 my-3 p-1.5 w-2/3"
                        type="date" min="2021-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="flex flex-row-reverse">
                <button className="px-10 py-1.5" type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;
