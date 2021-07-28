import React from 'react'
import Forms from '../FormComponents/Forms'

function NewExpenses(props) {
    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div>
            <Forms onSaveExpensesData={saveExpenseData} />
        </div>
    )
}

export default NewExpenses
