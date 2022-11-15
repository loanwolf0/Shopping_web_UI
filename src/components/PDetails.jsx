import React from 'react'
import { useParams } from 'react-router-dom'
import Dteails from './Dteails'



const PDetails = ({loading , data}) => {

  const { id } = useParams();
  const post = data.find(post => (post.id).toString() === id);
  console.log(post);
  
  return (
    <div>

      {loading && 
        <div>
          <h2> Loading... </h2>
        </div>
      }

      { !loading && 

          <Dteails
             key={post.id} 
             post={post}
          />
          
      }

    </div>
  )
}

export default PDetails
