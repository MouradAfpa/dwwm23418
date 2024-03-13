import React from "react";
import { Button } from "react-bootstrap";

const ViewDetailsButton = ({ onClick }) => {
  return (
    <Button variant="primary" onClick={onClick} className="mt-2">
      View Details
    </Button>
  );
};

export default ViewDetailsButton;
