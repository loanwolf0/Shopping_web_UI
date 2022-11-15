import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/details.css';
import Cart from './cart/Cart';

const Dteails = ({post}) => {

    const dispatch = useDispatch();

    const addToCart = (post) =>{
        console.log("clicked addToCart");
        console.log(post);
        dispatch({
            type:'addToCart',
            payload: post
        });
    }
    
  return (
 
      <div className='main-containerD' >
          <div className='img-containerD'>
              <img src={post.image} alt="#"  className='imgD'/>
          </div>

          <div className='details-containerD' >
                <h3 id='titleD' >{post.title}</h3>
                <h5 id='priceD' >Price: {post.price}</h5>
                <p id='descriptionD' > " {post.description}. "</p>
                <p id='ratingD'> Rating: {post.rating.rate}</p>
                <p id='rating-countD' > Rating Person: {post.rating.count}</p>

                <Link to={`/cart/${post.id}`} className='cart-container'>
                    <button className='aadToCart' onClick={() => addToCart({post})}> ADD TO CART </button>
                </Link>
          </div>

          

      </div>



  )
}

export default Dteails
