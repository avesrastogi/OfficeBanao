import React, { useState } from 'react'
import './ProjectInfo.css'
import { useForm } from "react-hook-form";

function ProjectInfo() {

  const [showForm, setShowForm] = useState(false);

  const showFormFunction = () => {
    setShowForm(!showForm);
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="container-1">
        <div className="project-info">
            <label className="project-name">ProjectName</label>
            <label className="name">New Delhi: Dwarka</label>
        </div>
        <button className="new-project">
            Start new Project
            <div className='new-project-plus' onClick={showFormFunction}>
            +
            </div>

            {showForm && (
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <input {...register("firstName", { required: true, maxLength: 20 })} />
                  <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                  <input type="number" {...register("age", { min: 18, max: 99 })} />
                  <input type="submit" />
                </form>
            )}
        </button>
    </div>
  )
}

export default ProjectInfo
