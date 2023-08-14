/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [logo,setLogo] = useState('Reactblog');

  let [title01,setTitle01] = useState('남자코트추천');
  let [title02,settitle02] = useState('강남우동맛집');
  let [title03,settitle03] = useState('파이썬독학');
  
  let [titleTest,setTitleTest] = useState(['남자코트추천','강남우동맛집','파이썬독학'])
  let [like, setLike] = useState(0);

  function likePlus(){
    setLike(like+1);
  }

  function nameChange(){
    setTitle01('여자코트추천')
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
      <div className="list">
        <h4>{title01} <span onClick={likePlus}>좋아요</span> {like} </h4>
        <button onClick={nameChange}>이름바뀜</button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title02}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title03}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={titleSort}>가나다순정렬</button>
      <div className='list'>
        <h4>{titleTest[0]}</h4>
        <h4>{titleTest[1]}</h4>
        <h4>{titleTest[2]}</h4>
        <button onClick={titleChange}>버튼버튼버튼</button>
      </div>

    

      <Modal></Modal>
      <List />

    </div>
  );
}

// 컴포넌트 만드는 방법1
function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>내용</p>
    </div>
  )
}

function List(){
  return(
    <h4>안녕</h4>
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

// 컴포넌트는 언제 사용하는가?
// 1. 반복적인 html 축약할때
// 2. 큰페이지들
// 3. 자주변경되는것들


export default App;
