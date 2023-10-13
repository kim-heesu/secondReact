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

        {/* nested Routes = 여러 유사한 페이지 필요할 때 사용!*/}
        {/* nested routes는 동시에 두개의 엘리먼트를 보여줌 (outlet을 통해 About + 뒤의 패스에 따른 엘리먼트) */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<Member />}/>
          <Route path="location" element={<Location />}/>
        </Route>
      </Routes>
    </div>
  );
}

// nested Routes는 outlet으로 다음 패스에따른 엘리먼트의 위치를 정해줘야한다.
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
