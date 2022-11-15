import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/nav.css';


const Nav = ({search, setSearch}) => {
  return (
        <nav className='navbar' >

            <form className='searchForm' >    
                <label htmlFor='search ' > search </label>
                <input 
                    id='search'
                    type='text'
                    placeholder='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            

            <div className='allLink' >
                <Link to='/' className='link'> Home </Link>
                <Link to='/about' className='link'> About </Link> 
                <Link to='/hireMe' className='link'> Hire-Me </Link> 
            </div>
            
               
        </nav>
    )
}
{/* <nav className='Nav' >
      <form className='searchForm' onSubmit={(e) => e.preventDefault()} >
        <label htmlFor='search'>Search Posts</label>

        <input 

          id='search'
          type='text'
          name='search'
          placeholder='Search Posts'
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          
        />

      </form>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      
    </nav> */}
export default Nav
