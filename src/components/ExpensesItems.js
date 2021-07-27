import React, { useState } from 'react'
import Expenses from './Expenses'
import ExpensesFilter from './ExpensesFilter'

function ExpensesItems(props) {
    const [filteredYear, setFilteredYear] = useState("");
    const filterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <ExpensesFilter selected={filteredYear}
                onChangeFilter={filterChange} />
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
