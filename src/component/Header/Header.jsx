import React from 'react';

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarSearch from "./NavbarSearch";

import styles from './Header.module.scss';
import {Col, Container, Row} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarNotification from "./NavbarNotification";

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <Container fluid>
                <Row className="align-items-center">
                    <Col md={2}>
                        <NavbarLogo/>
                    </Col>
                    <Col md={5} className="pl-0">
                        <NavbarSearch/>
                    </Col>
                    <Col md={1}>
                        <NavbarNotification/>
                    </Col>
                    <Col md={2} className="offset-2">
                        <div className="d-flex align-items-center">
                            <img src="https://via.placeholder.com/150" className={`rounded-circle ${styles.avatar}`}
                                 alt="plays"/>
                            <NavDropdown title="Hi, John" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    )
};

export default Header;
