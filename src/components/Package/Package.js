import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Package = ({ pkg }) => {

    const { _id, name, description, img } = pkg;
    return (
        <Col>
            <Card className="shadow">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/placeOrder/${_id}`}>
                        <button className="btn btn-primary">{name} Details</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;