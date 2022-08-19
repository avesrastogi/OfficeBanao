import React from 'react'
import './CardX.css'
import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';
import {useState} from "react";
/*     let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
      if(num>0)
      {
        setNum(num - 1);
      }
    }
  let handleChange = (e)=>{
    setNum(e.target.value);
    }



    <div class="input-group-prepend">
                <Button class="btn btn-outline-primary" type="button" onClick={decNum}>-</Button>
                </div>
                <input type="text" class="form-control" value={num} onChange={handleChange}/>
                <div class="input-group-prepend">
                <Button class="btn btn-outline-primary" type="button" onClick={incNum}>+</Button>
  </div>*/
function CardX({product}) {

  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
    if(num>0)
    {
      setNum(num - 1);
    }
  }
  let handleChange = (e)=>{
    setNum(e.target.value);
  }

  return (
    <div key={product && product.id ? product.id: "1"}>

      <Card>
            <Card.Img variant="top" src={product && product.image ? product.image : "https://d3juy0zp6vqec8.cloudfront.net/images/product/Office_Workstation_Linear.jpg"} />
            <Card.Body>
              <div className="card-title">
                <label className="card-title-text">{product && product.Title ? product.Title : "Linear Workstation"}</label>
                <div class="input-group-prepend">
                <Button class="btn btn-outline-primary" type="button" onClick={decNum}>-</Button>
                </div>
                <input type="text" class="form-control" value={product && product.num ? product.num : "0"} onChange={handleChange}/>
                <div class="input-group-prepend">
                <Button class="btn btn-outline-primary" type="button" onClick={incNum}>+</Button>
                </div>
              </div>
              <Card.Text className="card-description">
              {product && product.content ? product.content : "This space is for a 2 liner short description."}
              </Card.Text>

            </Card.Body>
      </Card>
    </div>
  )
}

export default CardX
