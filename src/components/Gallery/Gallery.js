import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className="container">
            <h2 className="mt-4 text-success">Gallery</h2>
            <h4 className="mt-4 text-success">Some of our spots photo</h4>
            <Row xs={1} md={3} className="g-4 my-4">
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }} variant="top" src="https://images.unsplash.com/photo-1594973782943-3314fe063f68?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbmclMjBrb25nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }} variant="top" src="https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRoYWlsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }}
                            variant="top" src="https://images.unsplash.com/photo-1506781961370-37a89d6b3095?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRoYWlsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }}
                            variant="top" src="https://images.unsplash.com/photo-1546726747-421c6d69c929?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVybGlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }}
                            variant="top" src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }}
                            variant="top" src="https://images.unsplash.com/photo-1494948949099-1311f3e907a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRoYWlsYW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }}
                            variant="top" src="https://images.unsplash.com/photo-1566914447826-bf04e54bf1be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGF5c2lhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }}
                            variant="top" src="https://images.unsplash.com/photo-1564506414752-a73fbe0c6b00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFsYXlzaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img
                            style={{ height: '300px' }}
                            variant="top" src="https://images.unsplash.com/photo-1444838639505-f9042c5d2386?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVybGlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Gallery;