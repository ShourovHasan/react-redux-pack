import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const state = useSelector(state => state);
  console.log(state);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data=> setProducts(data))
  }, [])
  // console.log(products);

  
  return (
    <div className='grid grid-cols-1 mx-auto my-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14'>
      {
        products.map(product => <ProductCard
          key={product._id}
          product={product}
        ></ProductCard>)
      }
    </div>
  );
};

export default Home;
