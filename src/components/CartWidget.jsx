import React from 'react'
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to={`/cart`}>
      <Badge bg="secondary" className='d-flex align-items-center'>
        <div className="material-symbols-outlined">
          shopping_cart
        </div>
        <div className="items"> 5 </div>
      </Badge>
    </Link>
  )
}

export default CartWidget