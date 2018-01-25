import React from "react";
import "./ReservationList.css";

export const ReservationList = ({ children }) => {
  return (
    <div className="list-container">
      <ul className="list-group">
      	<div className="list-item"> {children} </div>
      </ul>

    </div>
  );
};

export default ReservationList;