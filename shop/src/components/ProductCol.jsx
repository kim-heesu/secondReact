import React from 'react';
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ProdCol(props){
  return(
    <Link to={`/detail/${props.id}`}>
      <Col md={4}>
        <img src={process.env.PUBLIC_URL + '/img/best_product01.png'} alt="product images" />
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>{props.price}</p>
        <p>{props.id}</p>
      </Col>
    </Link>
  );
}

export default ProdCol;