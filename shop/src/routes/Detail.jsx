import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// styled component 사용방법
let YellowButton = styled.button`
  background: yellow;
  color:black;
  padding:10px;
`
// 비슷한데 살짝만 다른 스타일은 props를 사용하자
// if문으로 받은 props값에 따라 다른 스타일을 줄수도있다!
let BasicButton = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg  == 'blue' ? 'white' : '#000' };
  padding:10px;
`

// BasicButton컴포넌트의 스타일을 그대로 가져와서 특정부분만 추가하여 사용할 수도 있다.
// 스타일을 상속받은 BasicButton과 동일한 태그를 가진 컴포넌트가 생성된다.
let NewBasicBtn = styled(BasicButton)`
  border: 1px solid red;
`


let BlackBox = styled.div`
  background:#000;
  color:#fff;
  padding: 20px;
`

// styled component의 단점은?
// 1. js 파일 복잡해짐
// 2. 스타일 재사용 할시에는 import 해서 쓰면되지만, 이건 걍 css쓰면 됨
// 3. 협업시 css 담당의 숙련도 이슈

function Detail(props){
  let params = useParams();
  // react url 파라매터값 가져오기 = useParams 이용

  let thisId = props.product[params.id].id
  return(
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + '/img/best_product01.png'} alt="product images" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.product[thisId].title}</h4>
          <p>{props.product[thisId].content}</p>
          <p>{props.product[thisId].price}원</p>
          <p>{}</p>
          <button className="btn btn-danger">주문하기</button>

          <BlackBox>
            
            <YellowButton>스타일컴포넌트 만드는방법 let 컴포넌트이름 = styled.태그이름`스타일작성`</YellowButton>

            {/* 동일한 컴포넌트에 props로 bg값을 전달하여 사용 */}
            <BasicButton bg="blue">bg : blue button</BasicButton>
            <BasicButton bg="yellow">bg : yellow button</BasicButton>

            {/* BasicButton컴포넌트의 스타일을 그대로 가져와서 특정부분만 추가하여 사용할 수도 있다. */}
            <NewBasicBtn bg="blue">border: 1px solid red 만 추가햇어요~</NewBasicBtn>
          </BlackBox>
        </div>
      </div>
    </>
  );
}

export default Detail;