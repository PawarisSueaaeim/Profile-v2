import React from "react";
import "../Content.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

export default function Comment() {
  return (
    <div className="content-bg">
      <div className="container">
        <h4>Comment</h4>
        <div className="content-box">
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comment for me</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
