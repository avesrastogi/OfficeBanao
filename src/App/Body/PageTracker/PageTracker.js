import React from 'react'
import './PageTracker.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function PageTracker() {
  return (
    <div className="frame-1">
        <AddCircleOutlineIcon />
        <label className="first">Basic info</label>
        <hr className="line-3"></hr>
        <span class="bi bi-check-circle-fill"></span>
        <label className="first">Design Style Quiz</label>
        <hr className="line-3"></hr>

        <span class="bi bi-check-circle-fill"></span>
        <label className="first">Quiz Output</label>
        <hr className="line-3"></hr>

        <span class="bi bi-check-circle-fill"></span>
        <label className="first">Space Configuration</label>
        <hr className="line-3"></hr>

        <span class="bi bi-circle"></span>
        <label className="first">Cost Packages</label>
        <hr className="line-3"></hr>

        <span class="bi bi-circle"></span>
        <label className="first">Information Upload</label>
    </div>
  )
}

export default PageTracker