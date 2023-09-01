import {useState} from "react";
import './App.css';
import {Nav,Navbar,Container,Row} from 'react-bootstrap';
import data from './data.js';
import ProdCol from './ProductCol';

function App() {
  let [product] = useState(data)
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
        {product.map((prod)=>{
            return <ProdCol  title={prod.title} content={prod.content} price={prod.price}/>
              // key를 index로 변경 할수도있다.
        })}
          
        </Row>
      </Container>
    </div>
  );
}

export default App;
