import React from 'react';
import {Col} from 'react-bootstrap';

function ProdCol(props){
  return(
   <>
      <Col md={4}>
        <img src={process.env.PUBLIC_URL + '/img/best_product01.png'} alt="product images" />
        <h4>ㅇ</h4>
        <p>product info</p>
      </Col>
      <Col md={4}>hi</Col>
      <Col md={4}>hi</Col>
   </>
  );
}

export default ProdCol;