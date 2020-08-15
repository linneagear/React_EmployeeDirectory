import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="row">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
            <ul>
              <li><strong>Name:</strong> {props.name}</li>
              <li><strong>Occupation:</strong> {props.occupation}</li>
              <li><strong>Location:</strong> {props.location}</li>
              <li><strong>Phone Number:</strong> {props.number}</li>
            </ul>
      </div>
  );
}

export default EmployeeCard;
