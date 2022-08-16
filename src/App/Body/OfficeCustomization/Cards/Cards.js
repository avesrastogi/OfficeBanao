import React from 'react'
import CardX from './CardX'
import './Cards.css';
import data from './data';

function Cards() {
  return (
    <div className='products'>
      {data.map(product => (
        <div className='product'><CardX key={product.id} {...product} /></div>
      ))}
    </div>
  )
}

export default Cards