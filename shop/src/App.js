import './App.css';
import {Nav,Navbar,Container,Row,Col} from 'react-bootstrap';

function App() {
  
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
          <Col md={4}>
            <img src={process.env.PUBLIC_URL + '/img/best_product01.png'} alt="product images" />
            <h4>Product</h4>
            <p>product info</p>
          </Col>
          <Col md={4}>hi</Col>
          <Col md={4}>hi</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
