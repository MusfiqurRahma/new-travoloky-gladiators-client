import React from 'react';
import { useForm } from "react-hook-form";
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contact-container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="contact">Contact with us</h2>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name"/>
      <input {...register("email", { pattern: /^[A-Za-z]+$/i })} placeholder="Email" type='email' />
      <input type="message" {...register("age", { min: 18, max: 99 })} placeholder="Message..."/>
      <input className='input-btn' type="submit" />
    </form>
        </div>
    );
};

export default Contact;