import React from 'react';
import Graph from './charts/charts.js'

const Profile = ({billData}) => {
    return (
      <React.Fragment>
      <Graph billData= {billData}/>
      </React.Fragment>
    );
  }

export default Profile;
