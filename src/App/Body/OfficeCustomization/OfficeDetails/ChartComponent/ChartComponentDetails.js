import React from 'react'
import './ChartComponentDetails.css';
import { BsFillCircleFill } from 'react-icons/bs';

function ChartComponentDetails() {
  return (
    <div>
    <div className="boxed-1">
        <BsFillCircleFill color="rgb(5, 187, 210)"/>
        <label className="text-1">Open Workspace</label>
    </div>
    <div className="boxed-2">
        <BsFillCircleFill color="rgb(32, 112, 196)"/>
        <label className="text-1">Cabins</label>
    </div>
    <div className="boxed-3">
        <BsFillCircleFill color="rgb(235, 128, 241)"/>
        <label className="text-1">Meeting rooms</label>
    </div>
    <div className="boxed-4">
        <BsFillCircleFill color="rgb(245, 200, 66)"/>
        <label className="text-1">Public Spaces</label>
    </div>
    <div className="boxed-5">
        <BsFillCircleFill color="rgb(55, 212, 0)"/>
        <label className="text-1">Support Spaces</label>
    </div>
    </div>

    
  )
}

export default ChartComponentDetails