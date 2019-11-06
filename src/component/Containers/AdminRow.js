import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import './AdminRow.scss';

const AdminRow = ({ aside, content }) => {
    return  (
        <Container fluid>
            <Row>
                <Col lg={2} className="bg-ultra-dark vh-100">
                    {aside}
                </Col>
                <Col lg={10}>
                    {content}
                </Col>
            </Row>
        </Container>
    );
};

export default AdminRow;