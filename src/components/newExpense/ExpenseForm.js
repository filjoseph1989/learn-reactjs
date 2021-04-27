import {useState} from 'react';

const ExpenseForm = () => {
    // Here we accept object in useState() with properties that serve as
    // a container of inputs
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // Here we use spread ...userInput as we passed an object argument to
        // setUserInput(), to prevent losing data. This will create a new object
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    };

    const amountChangeHandler = (event) => {
        // Here we passed an annonymous function. A safer way.
        setUserInput((preState) => {
            return {
                ...userInput,
                enteredAmount: event.target.value
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((preState) => {
            return {
                ...userInput,
                enteredDate: event.target.value
            };
        });
    };

    // In this function you can use axios or fetch to pass data to server
    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {...userInput};
        console.log(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div>
            <div>
                <label>Title</label>
                <input
                    onChange={titleChangeHandler}
                    placeholder="enter title here"
                    className="border mx-11 my-3 p-1.5 w-1/2"
                    type="text" />
            </div>
            <div>
                <label>Amount</label>
                <input
                    onChange={amountChangeHandler}
                    placeholder="enter amount here"
                    className="border mx-4 my-3 p-1.5 w-1/2"
                    type="number" min="0.01" step="0.01" />
            </div>
            <div>
                <label>Date</label>
                <input
                    onChange={dateChangeHandler}
                    className="border mx-11 my-3 p-1.5 w-1/2"
                    type="date" min="2021-01-01" max="2022-12-31" />
            </div>
            <div>
                <button className="p-1.5" type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;
