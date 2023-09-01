import {useState} from "react";
import './App.css';
import {Nav,Navbar,Container,Row} from 'react-bootstrap';
import data from './data.js';
import ProdCol from './ProductCol';

function App() {
  let [shoes] = useState(data)
  console.log(shoes)
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" className="nav">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <ProdCol />
        </Row>
      </Container>
    </div>
  );
}

export default App;
