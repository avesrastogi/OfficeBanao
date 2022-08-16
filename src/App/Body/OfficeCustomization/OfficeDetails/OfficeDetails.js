import React from 'react'
import './OfficeDetails.css';
import OfficeConfiguration from './OfficeConfiguration/OfficeConfiguration'; 
import ChartComponent from "./ChartComponent/ChartComponent";

function OfficeDetails() {

    const data = [
        { value: 40 },
        { value: 25 },
        { value: 15 },
        { value: 8 },
        { value: 2 }
        ];

  return (
    <div>
        <OfficeConfiguration />
        <ChartComponent data={data} />
    </div>
  )
}

export default OfficeDetails