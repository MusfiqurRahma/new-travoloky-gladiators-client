import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import {Card, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Singlepackage.css';


const Singlepackage = () => {
  const { orderId } = useParams();
  const [packages, setPackages] = useState([]);
  const { user } = useAuth();


    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, []);
    if (!packages) {
      <Spinner animation="border" variant="dark" />;
  }
  const foundPackage = packages.find((x) => x._id === orderId);

  let _id, name,Description,img, price;

  if (foundPackage) {
      ({ _id, name,Description, img, price } = foundPackage);
  }

  const order_id = _id;
  const status = "Pending";

  // react hook form contents
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
      axios.post("http://localhost:5000/orders", {
              ...data,
              order_id,
              status
          })
          .then((res) => {
              if (res.data.insertedId) {
                  alert("Added ID" + res.data.insertedId);
                  reset();
              }
          });
  };
    return (
      <div>
      <Card className="text-center m-5 w-50 mx-auto" border="dark">
          <Card.Header className="fw-bold">
              Package Name: {name}
          </Card.Header>
          <Card.Img variant="top" className="w-75 m-auto" src={img} />
          <Card.Body>
              <Card.Text>{Description}</Card.Text>
          </Card.Body>
          <Card.Footer className="fw-bold">
              <h5> ${price}</h5>
          </Card.Footer>
          <div className="package-detail container mb-3 rounded">
            <h4 className="mb-4">Want To Book?</h4>
            <h5>Please! Fillup the form.</h5>
              <form className='single-package-form' onSubmit={handleSubmit(onSubmit)}>
                  <input
                      {...register("name", {
                          required: true,
                          maxLength: 30
                      })}
                      placeholder="Package Name"
                      value={user.displayName}
                  />
                  <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Your Email"
                      value={user.email}
                  />
                  <input
                      {...register("mobile", {
                          required: true,
                          maxLength: 20
                      })}
                      placeholder="Phone"
                  />
                  <textarea
                      {...register("address")}
                      placeholder="Address"
                  />
                  <input
                      type="number"
                      {...register("zip")}
                      placeholder="Zip Code"
                  />
                  <input
                      className="input-submit"
                      type="submit"
                      value="Confirm"
                  />
              </form>
          </div>
      </Card>
  </div>
    );
};

export default Singlepackage;