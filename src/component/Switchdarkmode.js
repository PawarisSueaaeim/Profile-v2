import React from "react";
import Form from "react-bootstrap/Form";

function Switchdarkmode() {
  return (
    <div>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
        />
      </Form>
    </div>
  );
}

export default Switchdarkmode;
