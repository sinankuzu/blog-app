import React from 'react'
import Card from '../components/Card';
import "./Home.css"
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="h1-middle">
          <h1>──── Dashboard ────</h1>
        </div>
        <Card/>
      </div>
    </div>
  );
}

export default Home