import React from 'react'
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
  
  return (
    <div></div>
  )
}

export default Form