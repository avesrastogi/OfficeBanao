import React from 'react'
import './OfficeDetails.css';
import OfficeConfiguration from './OfficeConfiguration/OfficeConfiguration'; 
import ChartComponent from "./ChartComponent/ChartComponent";
import ChartComponentDetails from './ChartComponent/ChartComponentDetails';

function OfficeDetails() {

    const data = [
        { value: 40 },
        { value: 25 },
        { value: 15 },
        { value: 8 },
        { value: 2 }
        ];

  return (
    <div className="office-details">
        <OfficeConfiguration />
        <div className="chart">
          <ChartComponent data={data} />
          <ChartComponentDetails />
        </div>
    </div>
  )
}

export default OfficeDetails