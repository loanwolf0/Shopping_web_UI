import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import {AiFillDelete} from "react-icons/ai"

import './cart.css'

const Cart = ({data}) => {

  const {cartItems} = useSelector(state => state.cart);

    const {id} = useParams();
    const product= data.find(product => (product.id).toString() === id);
    const shippingCharge = product.price > 1000 ? 0 :200


  return (


    <div className='all-container'>

      <main>

        <div className='cartItem'>

          <img src={product.image} alt={product.name} />
          <article>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </article>

          <div>
            <button  >-</button>
            <p>1</p>
            <button >+</button>
          </div>
            {/* <div className='imgC-container' >
                  <img src={product.image} alt={product.price} className="imgC" />
            </div>

          
            <div>
              <span>
                  <h4 id='priceC' className='detailsC'>{product.price}</h4>
              </span>
              <span>
                  <h4 id='quantityC' className='detailsC' >{product.price}</h4>
              </span>          
            </div>          

            <div main-btn-conatiner>
                <span className='btn-container' >
                      <button type='button' className='btnC' > -</button>
                </span>
                <span className='btn-container' >
                      <button type='button' className='btnC'> +</button>
                </span>
                <span className='btn-container' >
                      <button type='button' className='btnC'> Delete</button>
                </span>
            </div> */}

            <AiFillDelete/>
          </div>
        </main>
        
        <aside>

          <div className='total-amountC'>

              <h4 className='total-amount'>Price: {product.price}</h4>
              <h4 className='total-amount'>Shipping: {shippingCharge}</h4>
              <h4 className='total-amount'>Tax: {Math.floor((product.price) * 0.18)}</h4>
              <h3 className='total-amount' id='total-amount'>
              Total:{product.price +shippingCharge + Math.floor((product.price) * 0.18)}
              </h3>

          </div>
        </aside>
    </div>
  )
}


export default Cart
