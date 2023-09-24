import React from 'react';

function Detail(props){
  return(
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + '/img/best_product01.png'} alt="product images" width="100%" />
        </div> 
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">Product Name</h4>
          <p>Product Detail</p>
          <p>12000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </>
  );
}

export default Detail;