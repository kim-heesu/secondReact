import React from 'react';
import { useParams } from 'react-router-dom';

function Detail(props){
  let params = useParams();
  // react url 파라매터값 가져오기 = useParams 이용
  
  return(
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + '/img/best_product01.png'} alt="product images" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.product[params.id].title}</h4>
          <p>{props.product[params.id].content}</p>
          <p>{props.product[params.id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </>
  );
}

export default Detail;