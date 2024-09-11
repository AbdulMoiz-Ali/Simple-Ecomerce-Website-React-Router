import React from "react";
import Card from "../components/Card";

const Contact = () => {
  return (
    <Card title="Contact Us">
      <p>
        <strong>Address:</strong> 123 Main St, Anytown, USA 12345
      </p>
      <p>
        <strong>Phone:</strong> 555-555-5555
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:info@example.com">info@example.com</a>
      </p>
      <p>
        <strong>Hours of Operation:</strong> Monday - Friday, 9am - 5pm EST
      </p>
    </Card>
  );
};

export default Contact;
