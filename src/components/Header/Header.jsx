import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Your favorite books in one database.</h2><br />
                <p className='header-text fs-18 fw-3'>Whether you want to know more about your favorite series, or you are simply trying to find what book to start next- EZRead has got you covered!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header