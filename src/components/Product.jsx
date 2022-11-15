import React from 'react'
import PDetails from './PDetails'
import {  Routes , Route , Link} from "react-router-dom";

import '../styles/product.css';



const product = ({product}) => {
  return (
    <div className='card'>


        <Link to={`/pdetails/${product.id}`} className='details' >

            <div >
                <img src={product.image} alt="#"  className='img'/>
            </div>

       
            <div className='card-description' >
                <h3 id='title' >{product.title}</h3>

            </div>
        </Link>

        <div className='add-p-r-container'>

            <div className='priceP-container'>
                <h3  className='priceP'>Price: {product.price}</h3>
                <h6  className='priceP'>Rating: {product.rating.rate}</h6>
            </div>

            <div>
                <Link to={`/cart/${product.id}`}                id='cart-containerP' className='aadToCartP' >
                        <button className='aadToCartP' > + </button>
                </Link>
            </div>

        </div>

        

    </div>
  )
}

export default product
