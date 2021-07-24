import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const ForgetCode = () => {
  return (
    <Form>
      <h1>Password Reset</h1>
      <p>
        Check your email, you'll receive a code to verify here so you can reset
        your account password.
      </p>
      <Form.Group controlId="formCode">
        <Form.Control type="text" placeholder="Enter code" />
      </Form.Group>
      <Button variant="primary" type="submit" href="/forgetNew">
        Verify
      </Button>
    </Form>
  );
};

export default ForgetCode;
