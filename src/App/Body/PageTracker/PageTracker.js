import React from 'react'
import './PageTracker.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsCircle } from 'react-icons/bs';

function PageTracker() {
  return (
    <div className="frame-1">
        <AiFillCheckCircle/>
        <label className="first">Basic info</label>
        <div className="line-3"></div>

        <AiFillCheckCircle/>
        <label className="first">Design Style Quiz</label>
        <div className="line-3"></div>

        <AiFillCheckCircle/>
        <label className="first">Quiz Output</label>
        <div className="line-3"></div>

        <AiFillCheckCircle/>
        <label className="first">Space Configuration</label>
        <div className="line-3"></div>

        <BsCircle />
        <label className="first">Cost Packages</label>
        <div className="line-3"></div>

        <BsCircle />
        <label className="first">Information Upload</label>
    </div>
  )
}

export default PageTracker
