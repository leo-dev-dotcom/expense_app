import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react';
import ExpensesItems from './components/ExpensesComponents/ExpensesItems';
import NewExpenses from './components/ExpensesComponents/NewExpenses'
const Initial_Data = [
  {
    id: "1",
    title: "Toilet Paper",
    price: '94',
    date: new Date(2020, 7, 14),
  },
  {
    id: "2",
    title: "New TV",
    price: '28,999',
    date: new Date(2021, 2, 12)
  },
  {
    id: "3",
    title: "Car Insurance",
    price: '1,260',
    date: new Date(2021, 5, 28),
  },
  {
    id: "4",
    title: "New Desk(Wooden)",
    price: '25,999',
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(Initial_Data);
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <h1 className='text-center text-secondary'>Expense Manager</h1>
      <Container className='add-expense my-2'>
        <Row className="justify-content-md-center">
          <Col md={4} className='my-3'>
            <NewExpenses onAddExpense={addExpense}></NewExpenses>
          </Col>
          {/* <Col md={8}>
            <ExpensesItems items={expenses} />
          </Col> */}
        </Row>
      </Container>
      <Container className='view-expenses'>
        <ExpensesItems items={expenses} />
      </Container>
    </>
  );
}

export default App;
