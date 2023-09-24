import './App.css';
import {Nav,Navbar,Container} from 'react-bootstrap';
import { Routes,Route ,useNavigate, Outlet} from "react-router-dom";
import Main from './routes/Main';
import Detail from './routes/Detail';

function App() {
 
  let navigate =  useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" className="nav">
        <Container>
          <Navbar.Brand href="/">~Main~</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate(+1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/detail" element={<Detail />}/>

        <Route path="*" element={<div>없는페이지입니다</div>}/>

        <Route path="/about" element={<About />}>
          <Route path="member" element={<Member />}/>
          <Route path="location" element={<Location />}/>
        </Route>
      </Routes>
    </div>
  );
}
function About(){
  return(
    <div>
      <h4>어바웃페이지</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Member(){
  return(
    <div>
      <h4>Member페이지</h4>
    </div>
  )
}
function Location(){
  return(
    <div>
      <h4>Location 페이지</h4>
    </div>
  )
}


export default App;
