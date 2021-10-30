import React from 'react';
import { useForm } from "react-hook-form";
import './Orderplace.css';

const Orderplace = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='order-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 style={{fontWeight:'800',color:'#0a1735'}}>At first fill up this form</h2>
      <input {...register("Name", { required: true, maxLength: 30 })} placeholder='Name'/>
      <input {...register("email")} placeholder='Email'/>
      <input {...register("Address")} placeholder='Address'/>
      <input {...register("City")} placeholder='City'/>
      <input {...register("Country")} placeholder='Country'/>
      <input type="number" {...register("zip code", { min: 18, max: 99 })} placeholder='Zip Code'/>
      <input className='submit-btn' type="submit" />
    </form>
    </div>
  );
};

export default Orderplace;


