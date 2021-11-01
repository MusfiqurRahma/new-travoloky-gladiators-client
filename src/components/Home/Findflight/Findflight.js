import React from 'react';
import { useForm } from "react-hook-form";
import './Findflight.css';

const Findflight = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="flight-container p-5">
        <h1 className="text-white">Find Your Flight</h1>
        <form className="flight-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
          <label><input type="radio" name="radio" id=""/> OneWay</label>
          <label><input type="radio" name="radio" id=""/> Return</label>
          <label><input type="radio" name="radio" id=""/> Multicities</label>
        </div>
        <input
                {...register("place")}
                placeholder="Place"
                className="p-2 m-2"
              />
              <input
                {...register("date")}
                // placeholder="Name"
                type="date"
            className="p-2 m-2"
            placeholder="Check in"
              />
              <input
                {...register("date")}
                type="date"
            className="p-2 m-2"
            placeholder="Check Out"
              />
          <input
            type="number"
            placeholder="Adult"
            className="p-2 m-2"
            {...register("number",
              { min: 18, max: 99 })} />
          <input
            type="number"
            placeholder="Child"
            className="p-2"
            {...register("number",
              { min: 18, max: 99 })} />
      <input className="btn-submit" type="submit"/>
    </form>
        </div>
    );
};

export default Findflight;