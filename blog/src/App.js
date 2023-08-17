/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {

  let [logo,setLogo] = useState('Reactblog');
  
  let [titleTest,setTitleTest] = useState(['남자코트추천','강남우동맛집','파이썬독학'])
  let [like, setLike] = useState([0,15,0]);

  let [modal,setModal] = useState(false);

  function likePlus(index){
    let likeCopy = [...like];
    likeCopy[index] += 1;
    setLike(likeCopy);
  }

  function titleChange(){
    let copy = [...titleTest];
    // state변경 함수는 기존 스테이트, 신규 스테이트가 같다면 변경하지않는다.
    copy[0] ='여자코트추천'
    setTitleTest(copy)
  }
  
  function titleSort(){
    let sortCopy =[...titleTest];
    sortCopy.sort();
    setTitleTest(sortCopy)
  }

  // Destructuring문법
  let num = [1,2];
  let [a,c] = [1,2];// a = 1 , b = 2  가 된다.


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:"red", fontSize:"15px"}}>{logo}</h4>
      </div>
      {
        titleTest.map(function(a,i){
          return <div className="list" id={"list"+i}>
          <h4>
            {titleTest[i]}  
            <span onClick={()=>likePlus(i)} style={{"margin":"0 5px"}}>좋아요</span>
            {like[i]}
          </h4>
          <p>2월 17일 발행</p>
        </div>
        })
      }
      <buttoln onClick={titleChange}>이름바꾸기</buttoln>
      <button onClick={titleSort}>가나다순정렬</button>

      <button onClick={()=>{modal === false ? setModal(true) : setModal(false)}}>toggleModal</button>
      
      {
        modal === true ? <Modal change={titleChange} color="pink" titleTest={titleTest}/> : null
      } 
      
      {/* props방법
      1. <자식컴포넌트 이름={state이름}>
      2. props파라메터 등록 후 props.이름 사용
      
      자식 > 부모로만 전송, 형제끼리는 전송 안됨
      */}

    </div>
  );
}

// 컴포넌트 만드는 방법1
function Modal(props){
  return(
    <div className="modal" style={{background: props.color}}>
      <h4>{props.titleTest[0]}</h4>
      <p>날짜</p>
      <p>내용</p>
      <button onClick={props.change}>글 수정</button>
    </div>
  )
}

// 컴포넌트 만드는 방법2
// let Modal = () => {
//   return(
//     <div className="modal">
//     <h4>제목</h4>
//     <p>날짜</p>
//     <p>내용</p>
//   </div>
//   )
// }

export default App;
