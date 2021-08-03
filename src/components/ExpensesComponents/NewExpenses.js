import React, { useState } from 'react'
import Forms from '../FormComponents/Forms'

function NewExpenses(props) {
    const [isUpdate, setUpdate] = useState(false)

    let startUpdate = () => {
        setUpdate(true)
    }
    let stopUpdate = () => {
        setUpdate(false)
    }
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div>
            {!isUpdate && (
                <button className='btn btn-success text-dark' onClick={startUpdate}>Add New Expense</button>
            )}
            {isUpdate && (
                <Forms onSaveExpensesData={saveExpenseData} onCancel={stopUpdate} />
            )}
        </div>
    )
}

export default NewExpenses
