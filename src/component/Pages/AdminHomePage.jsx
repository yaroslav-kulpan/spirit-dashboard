import React from "react";
import { Form } from 'react-bootstrap';

const AdminHomePage = () => {
  return (
    <div className="text-center mt-5">
      <Form>
        <Form.Group>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default AdminHomePage;