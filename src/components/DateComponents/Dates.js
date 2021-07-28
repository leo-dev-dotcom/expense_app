import React from 'react'
import { Card } from 'react-bootstrap';
import './Dates.css'
function Dates(props) {
    // var today = new Date();
    // var day = String(today.getDate()).padStart(2, '0');
    // var month = String(today.getMonth() + 1).padStart(2, '0');
    // var year = today.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
    // let date = dd + '/' + mm + '/' + yyyy;

    // let date = day + '-' + month + '-' + year;
    return (

        <Card className='date text-secondary'>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </Card >

    )
}

export default Dates
