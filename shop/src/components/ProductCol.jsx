import React from 'react';
import {Col} from 'react-bootstrap';

function ProdCol(props){
  return(
   <>
      <Col md={4}>
        <img src={process.env.PUBLIC_URL + '/img/best_product01.png'} alt="product images" />
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>{props.price}</p>
      </Col>
   </>
  );
}

export default ProdCol;