import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const MyOrders = () => {

    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://ghostly-shadow-66375.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                // console.log(data);
            })
            .catch(err => {
                throw new Error(err)
              })
        // return () => {
        //     setOrders([]); // This worked for me
        //   };
    }, [user?.email]);

    // console.log(orders);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {

            const url = `https://ghostly-shadow-66375.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('deleted');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    }

    return (
        <div className="container">
            <h2 className="text-success my-md-5">My Orders</h2>
            <h4>User's Email: <span className="text-success
            
            ">{user?.email}</span></h4>
            <h3 className="m-4">Total Orders : {orders?.length}</h3>

            <Row xs={1} md={3} className="g-4 mb-5">
                {
                    orders?.map((order) => (
                        <Col
                            className="d-flex justify-content-center"
                            key={order?._id}>
                            <Card
                                border="success"
                                style={{ width: '18rem' }}>
                                <Card.Header>{order?.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{order?.packageName}</Card.Title>
                                    <p>
                                        <span className="fw-bold">Address:</span> {order?.address}, {order?.city}
                                    </p>
                                    <p>
                                        <span className="fw-bold">Phone:</span> {order?.phone}
                                    </p>
                                    <Button className="btn-danger" 
                                    onClick={() => handleDelete(order?._id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>))
                }
            </Row>

        </div>
    );
};

export default MyOrders;