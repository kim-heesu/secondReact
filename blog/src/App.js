/* eslint-disable */

import './App.css';
import {useState} from 'react';

function App() {

  let [logo,setLogo] = useState('Reactblog');
  // 변경이 없는 값은 굳이 state로 만들지 않아도된다. 요건 그냥 만들어봄
  
  let [titleTest,setTitleTest] = useState(['남자코트추천','강남우동맛집','파이썬독학']);
  let [title,setTitle] = useState(0);
  // state는 해당 state를 필요로하는 컴포넌트 중 가장 위에있는 컴포넌트에 선언해야한다.
  // 부모 > 자식으로 전달은 가능하지만 자식 > 부모 전달은 안되기 때문
  let [like, setLike] = useState([0,15,0]);

  let[inputValue, setValue] = useState('');

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

  function addList(){
    let listCopy =[...titleTest];
    listCopy.unshift('안녕안녕')
    setTitleTest(listCopy)
  }

  function deleteList(i){
    let listCopy =[...titleTest];
    listCopy.splice(i,1);
    setTitleTest(listCopy)
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
          <h4 onClick={()=>{modal === false ? setModal(true) : setModal(false); setTitle(i);}}>
            {titleTest[i]}  
            <span onClick={()=>likePlus(i)} style={{"margin":"0 5px"}}>좋아요</span>
            {like[i]}
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={()=>deleteList(i)}>삭제</button>
        </div>
        })
      }
      <button onClick={titleChange}>이름바꾸기</button>
      <button onClick={titleSort}>가나다순정렬</button>

      <input onChange={(e)=>{setValue(e.target.value)}}/>
      
      <button onClick={addList}>리스트추가</button>
      
      {
        modal === true ? <Modal titleChange={titleChange} color="pink" titleTest={titleTest} title={title}/> : null
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
function Modal(props,index){
  return(
    <div className="modal" style={{background: props.color}}>
      <h4>{props.titleTest[props.title]}</h4>
      <p>날짜</p>
      <p>내용</p>
      <button onClick={()=>{props.titleChange()}}>글 수정</button>
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
