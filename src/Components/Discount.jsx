import './Discount.css';

import React from 'react'

export const Discount = (props) => {
  return (
    <div className='discount'>{props.discount}%</div>
  )
}

