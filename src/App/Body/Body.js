import React from 'react'
import './Body.css';
import ProjectBar from './ProjectBar/ProjectBar';
import PageTracker from './PageTracker/PageTracker';
import OfficeCustomization from './OfficeCustomization/OfficeCustomization';
import ProjectInfo from './ProjectInfo/ProjectInfo';

function Body() {
  return (
    <div className="Body">
        <ProjectBar />
        <ProjectInfo />
        <div className="concept-screen">
          <PageTracker />
          <OfficeCustomization />
          <button className="proceed-btn">
            <div className="proceed-txt">Proceed</div>
          </button>
        </div>

    </div>
  )
}

export default Body