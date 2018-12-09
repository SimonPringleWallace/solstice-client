import React from 'react';
import Graph from './charts.js'

const Homepage = ({billData}) => {
    return (
      <React.Fragment>
      <p>Homepage</p>
      <Graph billData= {billData}/>
      </React.Fragment>
    );
  }

export default Homepage;
