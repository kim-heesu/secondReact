import './App.css';
import {Nav,Navbar,Container} from 'react-bootstrap';
import mainVisual from './img/main_visual02.png';

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
      
    </div>
  );
}

export default App;
