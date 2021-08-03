import React, { useState } from 'react'
import Expenses from './Expenses'
import ExpensesFilter from '../ExpensesFilterComponents/ExpensesFilter';

function ExpensesItems(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    // let viewExpenses = <p className='alert alert-danger' role="alert">No Expenses Found &#9785;</p>

    // if (filterExpenses.length > 0) {
    //     viewExpenses = filterExpenses.map((expenses) => (
    //         <Expenses title={expenses.title}
    //             price={expenses.price}
    //             date={expenses.date}
    //             key={expenses.id}
    //         />
    //     ))
    // }
    return (
        <div>
            <ExpensesFilter selected={filteredYear}
                onChangeFilter={filterChange} />
            {/* {viewExpenses} */}
            {filterExpenses.length > 0 && (
                filterExpenses.map((expenses) => (
                    <Expenses title={expenses.title}
                        price={expenses.price}
                        date={expenses.date}
                        key={expenses.id} />
                ))
            )}
            {!filterExpenses.length > 0 && (
                <h6 className='alert alert-danger' role="alert">No Expenses Found &#9785;</h6>
            )}
        </div>
    )
}

export default ExpensesItems
