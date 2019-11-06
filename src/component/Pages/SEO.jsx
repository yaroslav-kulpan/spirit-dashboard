import React from "react";
import {Form} from "react-bootstrap";

const SEO = () => {
    return (
        <>
            <h1>SEO</h1>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="3"/>
                </Form.Group>
            </Form>
        </>
    )
};

export default SEO;