import React from 'react';
import './homepage.css'
const Homepage = () => {
    return (
      <React.Fragment>
      <div className='hero'>
        <h1> Welcome to Solstice </h1>
        <h4>We organize, educate, and innovate to make solar accessible for every American.</h4>
      </div>
      <div className='homepage-content'>
        <h2>What is Community Solar?</h2>
        <div className='content-flex'>
          <p>Community solar puts renewable energy in the hands of the 90 million American households who can’t install solar panels. With community solar, solar arrays are installed in a centralized location where local residents, like you, can enroll at no additional costs.
             Unlike rooftop solar, community solar gives you all the benefits of solar energy, without the hassle. When enrolling in community solar, you will not only go green and save, but you will also support your local economy by helping to create local jobs and tax revenue.</p>
          <img alt='comm-solar' src={require('./images/commsolar.gif')}/>
        </div>
      </div>
      </React.Fragment>
    );
  }

export default Homepage;
