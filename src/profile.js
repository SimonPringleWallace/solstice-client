import React, { Component } from 'react';
import Graph from './charts.js'

const Profile = ({billData}) => {
    return (
      <React.Fragment>
      <Graph billData= {billData}/>
      </React.Fragment>
    );
  }

export default Profile;
