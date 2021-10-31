import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { packageId } = useParams();
    const [pkg, setPkg] = useState({});

    useEffect(() => {
        fetch(`https://ghostly-shadow-66375.herokuapp.com/packages/${packageId}`)
            .then((res) => res.json())
            .then((data) => {
                setPkg(data);
                // console.log(data);
            })
            .catch(err => {
                throw new Error(err)
              })
    }, [packageId]);

    const onSubmit = data => {
        // console.log(data);
        
        fetch('https://ghostly-shadow-66375.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result);
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
            .catch(err => {
                throw new Error(err)
              })
    };


    return (
        <div className="container">
            <h2 className="text-success my-3">Package Details</h2>
            <div className="row">
                <div className="col-md-6">
                    <Card className="my-4">
                        <Card.Img variant="top" src={pkg.img} />
                        <Card.Body>
                            <Card.Title>Package name: {pkg.name}</Card.Title>
                            <Card.Text>{pkg.description}</Card.Text>
                            <Card.Text className="fw-bold">Price: ${pkg.price}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <h3 className="text-success mb-4">Place your order</h3>
                    <form className="d-flex flex-column align-items-center " onSubmit={handleSubmit(onSubmit)}>

                        {pkg.name && <input className="mb-2 w-75" defaultValue={pkg.name} {...register("packageName")} />}

                        <input className="mb-2 w-75" defaultValue={user.displayName} {...register("name")} />

                        <input className="mb-2 w-75 " defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}
                        <input className="mb-2 w-75" placeholder="Address" defaultValue="" {...register("address")} />
                        <input className="mb-2 w-75" placeholder="City" defaultValue="" {...register("city")} />
                        <input className="mb-2 w-75" placeholder="Phone Number" defaultValue="" {...register("phone")} />

                        <input className="btn btn-success mb-5 w-50" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;