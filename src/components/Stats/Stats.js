import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Stats = () => {
    return (
        <div className="container">
            <h2 className="text-success my-md-5">Why Choose Us</h2>
            <div>
                <CardGroup className="shadow">
                    <Card>
                        <Card.Img style={{ height: '300px' }} variant="top" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                        <Card.Body>
                            <Card.Title>Handpicked Hotels
                            </Card.Title>
                            <Card.Text>
                                We will provide best handpicked hotels with best value.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img style={{ height: '300px' }} variant="top" src="https://image.freepik.com/free-photo/businessman-handshaking-businesswoman-showing-respect-closeup-view-hands-shaking_1163-4679.jpg" />
                        <Card.Body>
                            <Card.Title>World Class Service
                            </Card.Title>
                            <Card.Text>
                                Best services we provide. Our services are world class.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img style={{ height: '300px' }} variant="top" src="https://image.freepik.com/free-photo/best-price-offer-promotion-commerce-marketing-concept_53876-133564.jpg" />
                        <Card.Body>
                            <Card.Title>Best Price Guarantee
                            </Card.Title>
                            <Card.Text>
                                You will gate the best price, we guarantee it.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Stats;