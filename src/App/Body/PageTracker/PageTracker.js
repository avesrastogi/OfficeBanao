import React from 'react'
import './PageTracker.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsCircle } from 'react-icons/bs';

function PageTracker() {
  return (
    <div className="frame-1">
        <AiFillCheckCircle/>
        <label className="first">Basic info</label>
        <hr className="line-3"></hr>

        <AiFillCheckCircle/>
        <label className="first">Design Style Quiz</label>
        <hr className="line-3"></hr>

        <AiFillCheckCircle/>
        <label className="first">Quiz Output</label>
        <hr className="line-3"></hr>

        <AiFillCheckCircle/>
        <label className="first">Space Configuration</label>
        <hr className="line-3"></hr>

        <BsCircle />
        <label className="first">Cost Packages</label>
        <hr className="line-3"></hr>

        <BsCircle />
        <label className="first">Information Upload</label>
    </div>
  )
}

export default PageTracker