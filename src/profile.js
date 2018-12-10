import React from 'react';
import Graphs from './charts/charts.js'

const Profile = ({billData}) => {
    return (
      <React.Fragment>
      <Graphs billData= {billData}/>
      </React.Fragment>
    );
  }

export default Profile;
