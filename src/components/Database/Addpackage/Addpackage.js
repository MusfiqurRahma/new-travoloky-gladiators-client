import React from 'react';
import { useForm } from 'react-hook-form';
import './Addpackage.css';

const Addpackage = () => {
       
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://grim-zombie-49480.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Are you sure want to add a new Package?')
                    reset();
                }
            })
    } 
    return (
        <div className='mt-4 mb-4 addpackage-container'>
           <h4 style={{fontWeight:'700'}}>ADD PACKAGES</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input {...register("name", { required: true, maxLength: 30 })} placeholder='Name' />
                    
                    <input {...register("img")} placeholder='Image url' />
                    
                    <input type="message" {...register("Description", { min: 18, max: 99 })} placeholder='Description' />
                     
                    <input style={{backgroundColor:'#0bbdb7',border:'1px solid #0bbdb7',padding:'2px 5px',color:'white'}} type="submit" />
           </form>
       </div>
    );
};

export default Addpackage;