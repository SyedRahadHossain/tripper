import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="success"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        Tripper
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-white" to="/home#home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/home#services">
                            Packages
                        </Nav.Link>

                        {user.email && (
                            <Nav.Link as={Link} className="text-white" to="/myOrders">
                                My Orders
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Nav.Link as={Link} className="text-white" to="/addService">
                                Add service
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Nav.Link as={Link} className="text-white" to="/manageAllOrders">
                                Manage All Orders
                            </Nav.Link>
                        )}
                        {user?.email ? (
                            <Button
                                onClick={logOut}
                                className="me-3 text-success fw-bold"
                                variant="light"
                            >
                                Log Out
                            </Button>
                        ) : (
                            <Nav.Link as={Link} className="text-white" to="/login">
                                Login
                            </Nav.Link>
                        )}
                        {user.email && (
                            <Navbar.Text>
                                Welcome!{" "}
                                <Link className="text-decoration-none" to="/home">
                                    {" "}
                                    {user?.displayName}
                                </Link>
                            </Navbar.Text>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;