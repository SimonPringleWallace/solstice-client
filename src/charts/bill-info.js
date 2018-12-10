import React from 'react';
import {Bar} from 'react-chartjs-2'
import './charts.css'

const BillInfo = ({getDates, findBillDetails}) => {

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
        </React.Fragment>
      );
  }

export default BillInfo;
