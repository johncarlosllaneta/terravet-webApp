import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ForgetNew = () => {
  return (
    <Form>
      <h1>Password Reset</h1>
      <Form.Group controlId="formPassword">
        <Form.Control type="password" placeholder="New Password" />
        <br></br>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Reset
      </Button>
    </Form>
  );
};

export default ForgetNew;
