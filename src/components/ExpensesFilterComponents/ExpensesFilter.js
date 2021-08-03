import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

function ExpensesFilter(props) {
    const dropdownChange = (e) => {
        props.onChangeFilter(e.target.value);
        // console.log(e.target.value)
    };
    return (
        <>
            <div className="my-3 d-flex flex-row justify-content-between">
                <h5 className='text-info'>Filter by year &#8594;</h5>
                <FloatingLabel controlId="floatingSelect" label="Sort By" className='text-light'>
                    <Form.Select value={props.selected} onChange={dropdownChange} className='w-auto btn-outline-secondary bg-dark border-dark'>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </Form.Select>
                </FloatingLabel>
            </div>
        </>
    )
}

export default ExpensesFilter
