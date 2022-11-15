import React  from 'react'
import Product from './Product';


import '../App.css';


const Home = ({loading, data}) => {

  console.log(data)

  return (
    <main className='products-container'>

      {loading && 
        <div>
          <h2> Loading... </h2>
        </div>
      }

      { !loading && 
        data.map((product) => (

          <Product  
            key ={product.id} 
            product={product} 
          />

        ))
      }
    </main>
  )
}

export default Home
