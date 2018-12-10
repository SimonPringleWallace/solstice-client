import React from 'react';
import {Line} from 'react-chartjs-2'
import './charts.css'

const Graph = ({getDates, findBillDetails}) => {
     return (
        <React.Fragment>
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
