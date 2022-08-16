import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class Switchdarkmode extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
          />
        </Form>
      </div>
    );
  }
}
