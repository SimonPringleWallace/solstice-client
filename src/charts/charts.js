import React from 'react';
import BillInfo from './bill-info'
import EnergyUsage from './energyUsage'
import './charts.css'

const Graph = ({billData}) => {

  const getDates = () => {
    return billData.map(bill => bill.month + '/' + bill.year).reverse()
  }

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

export default Graph;
