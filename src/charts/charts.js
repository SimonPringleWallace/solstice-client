import React from 'react';
import BillInfo from './bill-info'
import EnergyUsage from './energyUsage'
import './charts.css'

const Graphs = ({billData}) => {
// distill dates from the array of objects (billData) that came back from the API call
// .reverse() is used to set the dates in chronological order
  const getDates = () => {
    return billData.map(bill => bill.month + '/' + bill.year).reverse()
  }

// depending on which key is passed in, findBillDetails maps billData and
// returns an array containing the desired information - kwh, bill, savings, etc.
  const findBillDetails = (desiredKey) => {
    return billData.map(bill => bill[desiredKey]).reverse()
  }
     return (
        <React.Fragment>
        <BillInfo
        getDates = {getDates.bind(this)}
        findBillDetails={findBillDetails.bind(this)}
        />
        <EnergyUsage
        getDates = {getDates.bind(this)}
        findBillDetails={findBillDetails.bind(this)}
        />
        </React.Fragment>
      );
  }

export default Graphs;
