import React, {useState} from 'react';
import './App.scss';

import { Container, Row, Col } from "react-bootstrap";
import Confirmation from "./components/Confirmation";
import PizzaCard from "./components/PizzaCard";
import data from './data'

function App() {
  const [ordered, setOrdered] = useState(false)

  function displayConfirmation(){
    setOrdered(true)

    setTimeout(()=>{
      setOrdered(false)
    },3000)
  }
  
  return (
    <Container>
      {ordered && <Confirmation toggle={setOrdered}/>}
      <Row>
        {/* <p>React Bootstrap <span role="img" aria-label="pizza">🍕</span></p> */}
        {data.map(data=>(
          <Col key={data.id} className="mb-5">
            <PizzaCard data={data} setOrdered={displayConfirmation}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
