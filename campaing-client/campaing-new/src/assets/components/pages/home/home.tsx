import React from 'react';
import './home.css';
import homeImg from '../../img/homeImg.mp4';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to PromoIt</h1>
      </header>

      <div id="video-container">
        <video id="video" src={homeImg} autoPlay loop muted></video>
      </div>

     
    </div>
  );
};

export default HomePage;
