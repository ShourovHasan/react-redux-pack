import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  
  return (
    <div
      className='relative flex flex-col p-3 text-indigo-900 border shadow-lg rounded-3xl'
      key={product._id}
    >
      {
        pathname.includes('cart') && (
          <div className="absolute w-10 h-10 p-2 text-white bg-indigo-400 rounded-full top-2 right-2">
            <p className="flex items-center justify-center">{product.quantity}</p>
          </div>
        )
      }
      <div className='mx-auto h-52 w-52'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='mb-3 font-semibold text-center'>Rating: {product.rating}</p>
      <div className='flex-1 '>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, indx) => {
            return <li key={indx} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {
          !pathname.includes("cart") && (
          <button onClick={() => dispatch(addToCart(product))} className='flex-1 px-2 py-1 text-white bg-indigo-500 rounded-full text-bold'>
          Add to cart
            </button>
        )}
        {
          pathname.includes("cart") && (
          <button onClick={() => dispatch(removeFromCart(product))} className='flex-1 px-1 py-1 text-white bg-red-500 rounded-full text-bold'>
          Remove from Cart
            </button>
        )}
        {
          !pathname.includes("cart") &&(
          <button
          title='Add to wishlist'
          className='px-2 py-1 bg-indigo-500 rounded-full'
        >
          <BiListPlus className='text-white' />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
