import React from 'react';
import { PRODUCTS } from '../showproduct';
import Product from '../components/Product';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <div className="title">
            <h1>Welcome to ElectroShop</h1>
            <p>Explore the best deals on Electronics!</p>
        </div>
        <div className="showproducts">
            {PRODUCTS.map((product)=>(
                 <Product data={product}/>
            ))}
        </div>
    </div>
  );
};

export default Home;