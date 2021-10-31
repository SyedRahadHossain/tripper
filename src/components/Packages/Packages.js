import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Package from '../Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const { isLoading } = useAuth();


    useEffect(() => {
        fetch("https://ghostly-shadow-66375.herokuapp.com/packages")
            .then((res) => res.json())
            .then((data) => {
                setPackages(data);
                console.log(data)
            })
            .catch(err => {
                throw new Error(err)
              })
    }, []);

    if (isLoading) {
        return <Spinner animation="border" variant="success" />;
    }

    return (
        <div id="packages" className="container">
            <h2 className="text-success my-5">Our Packages</h2>
            <Row xs={1} md={2} className="g-4 mb-5">
                {packages.map((pkg) => (
                    <Package key={pkg._id} pkg={pkg}></Package>
                ))}
            </Row>
        </div>
    );
};

export default Packages;