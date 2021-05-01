// import './ExpenseItem.css'; to be able to add css just do this line and create file of it
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';
import React, { useState } from 'react';

function ExpenseItem (props) {
    const eventHandler = (e) => {
        console.log(e);
    };

    return (
        <Card className="bg-purple-300 border grid m-5 mt-5 p-5 rounded card">
            <div className="grid grid-cols-4">
                <ExpenseDate date={props.date} />
                <div className="flex font-bold items-center justify-start text-lg">{props.title}</div>
                <div className="border flex font-bold items-center justify-center mx-5 p-2 rounded">${props.amount}</div>
                <div>
                    <button onClick={eventHandler}>Change Title</button>
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
