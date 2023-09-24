import React from 'react';
import {useState} from "react";
import {Container,Row} from 'react-bootstrap';
import ProdCol from '../components/ProductCol';
import data from '../data.js';

function Main(props){
  let [product] = useState(data)
  return(
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
        {product.map((prod)=>{
            return <ProdCol title={prod.title} content={prod.content} price={prod.price}/>
        })}
        </Row>
      </Container>
    </>
  );
}

export default Main;