import React from 'react'
import './OfficeCustomization.css';
import OfficeDetails from './OfficeDetails/OfficeDetails';
import Cards from './Cards/Cards';

function OfficeCustomization() {
  return (
    <div className="office-customization">
        <OfficeDetails />
        <div className="line-2"></div>
        <Cards />
    </div>
  )
}

export default OfficeCustomization