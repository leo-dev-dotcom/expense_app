import React from 'react'
import { Card } from 'react-bootstrap'
import Dates from '../DateComponents/Dates'
import '../DateComponents/Dates.css'
function Expenses(props) {

    return (

        <Card className="expense my-3 bg-dark text-light">
            <Dates date={props.date}></Dates>
            <Card.Text className='title text-danger'>{props.title}</Card.Text>
            <Card.Text className='price text-success'>&#x20b9; {props.price}</Card.Text>
        </Card>

    )
}

export default Expenses
