import React from 'react'
import './OfficeCustomization.css';
import OfficeDetails from './OfficeDetails/OfficeDetails';
import Cards from './Cards/Cards';

function OfficeCustomization() {
  return (
    <div className="office-customization">
        <OfficeDetails />
        <Cards />
    </div>
  )
}

export default OfficeCustomization
