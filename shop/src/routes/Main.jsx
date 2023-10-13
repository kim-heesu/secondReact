import React from 'react';
import {Container,Row} from 'react-bootstrap';
import ProdCol from '../components/ProductCol';


function Main(props){
  return(
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
        {props.product.map((prod,i)=>{
            return <ProdCol key={i} id={prod.id} title={prod.title} content={prod.content} price={prod.price}/>
        })}
        </Row>
      </Container>
    </>
  );
}

export default Main;