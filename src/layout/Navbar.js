import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='px-5 m-2 mx-auto bg-indigo-200 rounded-full h-14 max-w-7xl'>
      <ul className='flex items-center justify-between h-full gap-3 mx-auto font-semibold text-indigo-900'>
        <h1 className='flex-1'>Moon Tech</h1>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li title='Wishlist' className='p-2 bg-indigo-500 rounded-full'>
          <Link to='/'>
            <IoIosListBox className='text-white' />
          </Link>
        </li>
        <Link to='/cart'>
          <li title='cart' className='p-2 bg-indigo-500 rounded-full'>
              <BsFillCartFill className='text-white ' />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
