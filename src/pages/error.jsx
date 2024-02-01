import React from 'react';

import NavBar from '../components/navBar';

import img from "../assets/4.png"

const Error = () => {
  return (
    <>
      <NavBar/>
      <div className="page">
        <div className="first">
          <h2 className='Error'>Error 404</h2>
          <p className='Error'>There Is No Page Called Like This</p>
        </div>
        <div className="second">
          <img src={img} alt="Error Page Img." />
        </div>
      </div>
    </>
  );
}

export default Error;
