import React from 'react';
import { useForm } from "react-hook-form";
import './Findflight.css';

const Findflight = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div className="flight-container">
            <input type="radio" name="radio" id="" />
            <h2>Find Your Flight</h2>
      <form className="flight-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("place", { required: true, maxLength: 20 })} type='place'/>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default Findflight;