import React from "react";
import "./ReservationListItem.css";

export const ReservationListItem = props =>
  <li className="list-group-item">
    {props.children}
  </li>;