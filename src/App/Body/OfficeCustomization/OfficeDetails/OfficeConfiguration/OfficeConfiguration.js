import React from 'react'
//import { useState } from 'react';
import './OfficeConfiguration.css';
//import InlineEdit from './InlineEdit';

function OfficeConfiguration() {
  //const [disableButton,setDisableButton] = useState(false);
  
  return (
    <div className="frame-8">
        <div className="frame-9">Configuring your office</div> 
        <div className="frame-10">Based on your design preference and your office area below is a configuration for your space.</div>
        <div className="frame-11">
            Total Area  
            { /*<div className="col-sm-10 d-flex align-items-center">
              <input
                className="form-control mx-1"
                value={this.value}
                disabled={disableButton}
              />
              <button className="text-end" onClick={() => setDisableButton(!disableButton)}>
                  <i
                  style={{ color: "blue" }}
                  className="fas fa-edit d-block"
                  ></i>pencil
              </button>
            </div> */}
        </div> 
        <div className="line"></div>
        <div className="frame-12">-200</div>
        <div className="frame-13">3200</div>
        <div className="frame-15">You still have some area to cover</div>

    </div>
  )
}

export default OfficeConfiguration