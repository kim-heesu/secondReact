/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {

  let [logo,setLogo] = useState('Reactblog');
  
  let [titleTest,setTitleTest] = useState(['리액트재밌다','뷰가재밌다','앵귤러는??'])
  let [like, setLike] = useState([0,15,0]);

  let [modal,setModal] = useState(false);

  function likePlus(index){
    let likeCopy = [...like];
    likeCopy[index] += 1;
    setLike(likeCopy);
  }

  function nameChange(){
    setTitle01('리액트잼있다')
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
            <span onClick={()=>likePlus(i)}>좋아요</span>
            {like[i]}
          </h4>
          <p>2월 17일 발행</p>
        </div>
        })
      }
      <button onClick={titleChange}>버튼버튼버튼</button>
      <button onClick={titleSort}>가나다순정렬</button>

      <button onClick={()=>{modal === false ? setModal(true) : setModal(false)}}>toggleModal</button>
      
      {
        modal === true ? <Modal/> : null
      } 
      

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
