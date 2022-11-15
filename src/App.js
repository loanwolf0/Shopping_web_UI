import {  Routes , Route , Link} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";

import axios from 'axios';
import About from "./components/About";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import PDetails from "./components/PDetails";


import './App.css';
import Cart from "./components/cart/Cart";


function App() {


  const [loading , setLoading] = useState(false);
  const [data , setData] = useState([]);

  // for search
  const [search , setSearch] = useState('');
  const [searchResults , setSearchResults] = useState([]);

  useEffect(() => {
    const filterResults = data.filter(post =>
      (post.description).toLowerCase().includes(search.toLowerCase() )  
      || (post.title).toLowerCase().includes(search.toLowerCase()));

      setSearchResults(filterResults);

  },[search , data]);



  useEffect(() =>{

    setLoading(true);
    axios({
      
        method:'GET',
        url:'https://fakestoreapi.com/products'

    }).then ( res => {
      setData(res.data)
    }).catch ( err => console.log(err))
    .finally(() => setLoading(false));

  } ,[]);

  return (
    <div>
      
      <Header/>
      <Nav
        search={search}
        setSearch={setSearch}
      />
      
      <Routes>

        <Route path='/' 
            element={<Home
                loading={loading}
                data={searchResults}
            />}
        />

        <Route path='/about' 
            element={<About/>}
        />

        <Route path='/pdetails/:id' 
            element={
            <PDetails
              
              loading={loading}
              data={data}
              
              
            />}
        />

        <Route 
            path="/cart/:id"
            element={
              <Cart

                data={data}  
              
              />
            }
        />

        <Route path='/hireMe' 
            element={
              <Contact/>
          }
        />

      </Routes>

      <Footer />

    <div/>

    </div>
  );
}

export default App;
