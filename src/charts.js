import React from 'react';
import {Bar, Line} from 'react-chartjs-2'
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
        <div className='bill-info chart'>
        <h2> Bill Information</h2>
        <Bar
        data={{
          labels: getDates(),
          datasets: [{
          label: 'Total Bill',
           data: findBillDetails('bill'),
           backgroundColor: 'rgb(255,99,71,.4)'
        },
        {
          label: 'Total Savings',
           data: findBillDetails('savings'),
           backgroundColor: 'rgba(152,251,152,.4)'
        }]
        }}
        options={{
          responsive:true,
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

        <div className='energy-usage chart'>
        <h2>Energy Usage</h2>
        <Line
        data={{
          labels: getDates(),
          datasets: [{
          label: 'Energy Usage',
           data: findBillDetails('kwh'),
           backgroundColor: 'rgb(30,144,255,.1)'
        }]
        }}
        options={{
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true,
                      callback:function(value){
                        return value + 'kwh';
                      }
                  }
              }]
          },
          maintainAspectRatio: false
      }}
        />
        </div>
        </React.Fragment>
      );
  }

export default Graph;
