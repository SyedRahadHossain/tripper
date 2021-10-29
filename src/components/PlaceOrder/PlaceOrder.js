import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { packageId } = useParams();


    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://rocky-reef-46271.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                console.log(data);
            });
    }, []);
    const singleDetail = data.filter((details) => details._id === packageId);
    return (
        <div className="container">
            <h2 className="text-primary my-3">Service Details</h2>
            <div className="row">
                <div className="col-md-8">
                    <Card className="my-4">
                        <Card.Img variant="top" src={singleDetail[0]?.img} />
                        <Card.Body>
                            <Card.Title>Service name: {singleDetail[0]?.name}</Card.Title>
                            <Card.Text>{singleDetail[0]?.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <h2>Address</h2>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;