import React from 'react'
import Expenses from './Expenses'

function ExpensesItems(props) {
    return (
        <div>
            {props.items.map((expenses) => (

                <Expenses title={expenses.title}
                    price={expenses.price}
                    date={expenses.date}
                    key={expenses.id}
                />
            ))}
        </div>
    )
}

export default ExpensesItems
