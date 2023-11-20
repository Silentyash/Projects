import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <>
      <h1>Home</h1>
      <p> Go to <Link to='events'>Events Page</Link></p>

    </>
  );
}

export default Home