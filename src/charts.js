import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2'

const Graph = ({billData}) => {
  // get an array for each of the years

  const getDates = () => {
    return billData.map(bill => bill.month + '/' + bill.year).reverse()
  }
  const billArray = billData.map(bill => bill.bill).reverse()
  const savingsArray = billData.map(bill => bill.savings).reverse()

    return (
      <React.Fragment>
      <div className='bill-info'>
      <h2> Bill Information</h2>
      <Bar
      data={{
        labels: getDates(),
        datasets: [{
        label: 'Total Bill',
         data: billArray,
         backgroundColor: 'rgb(255,99,71,.5)'
      },
      {
        label: 'Total Savings',
         data: savingsArray,
         backgroundColor: 'rgba(152,251,152,.5)'
      }]
      }}
      width={5}
      height={100}
      options={{
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback:function(value){
                      return '$' + value;
                    }
                }
            }]
        },
        maintainAspectRatio: false
    }
  }
      />
      </div>
      <div className='energy-usage'>
      <Line

      />
      </div>
      </React.Fragment>
    );
  }

export default Graph;
