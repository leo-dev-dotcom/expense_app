import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Form.css'
function Forms(props) {
    const [titles, setTitle] = useState('')
    const [prices, setPrices] = useState('')
    const [dates, setDate] = useState('')
    const [isValidTitle, setValidTitle] = useState('true')
    const [isValidPrice, setValidPrice] = useState('true')
    const [isValidDate, setValidDate] = useState('true')
    // const [showResults, setShowResults] = useState(false)

    // let onClick = () => {
    //     setShowResults(true)
    // let btn = document.querySelector('btn')
    //     for (var i = 0; i < btn.length; i += 1) {
    //         btn[i].style.display = 'none';
    //     }
    // btn.style.display = 'none'
    // }

    let title = (e) => {
        setTitle(e.target.value)
        if (e.target.value.trim().length > 0) {
            setValidTitle(true)
        }
    }

    let price = (e) => {
        setPrices(e.target.value)
        if (e.target.value.trim().length > 0) {
            setValidPrice(true)
        }
    }
    let date = (e) => {
        setDate(e.target.value)
        if (e.target.value.trim().length > 0) {
            setValidDate(true)
        }
    }

    let formSubmit = (e) => {
        e.preventDefault();
        // console.log('submitted')
        // if (titles === '' && prices === '' && dates === '') {
        //     alert('Input field must not be empty')
        // }
        if (titles.trim().length === 0) {
            setValidTitle(false);
            return;
        } else if (prices.trim().length === 0) {
            setValidPrice(false);
            return;
        } else if (dates.trim().length === 0) {
            setValidDate(false);
            return;
        }
        const data = {
            title: titles,
            price: prices,
            date: new Date(dates)
        }
        props.onSaveExpensesData(data);
        setTitle('')
        setPrices('')
        setDate('')

    }

    return (
        <>
            {/* <Button className='btn btn-success  text-dark' onClick={onClick} >Click Here To Add Expense &#8594;</Button>
            {showResults ? */}
            <Form onSubmit={formSubmit} autoComplete='off'>
                <Form.Group className={`mb-3 text-center form_group ${!isValidTitle ? 'invalid' : ''}`} controlId="formBasicTitle">
                    <Form.Label className='text-light'>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" value={titles} onChange={title} />
                </Form.Group>
                <Form.Group className={`mb-3 text-center form_group ${!isValidPrice ? 'invalid' : ''}`} controlId="formBasicAmount">
                    <Form.Label className='text-light'>Amount</Form.Label>
                    <Form.Control type="text" placeholder="Enter amount" value={prices} onChange={price} />
                </Form.Group>
                <Form.Group className={`mb-3 text-center form_group ${!isValidDate ? 'invalid' : ''}`} controlId="formBasicCheckbox">
                    <Form.Label className='text-light'>Date</Form.Label>
                    <Form.Control type="date" value={dates} onChange={date} />
                </Form.Group>
                <Button variant="primary text-dark" type="submit">
                    Add Expense
                </Button>
                <Button variant="danger text-dark mx-3 my-2" type="button" onClick={props.onCancel}>Cancel</Button>
            </Form>
            {/* : null} */}
        </>
    )
}

export default Forms
