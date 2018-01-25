import React from "react";
import "./ReservationListItem.css";

export const ReservationListItem = (props) => {
	return (
		<li key={props.reservation._id}>
		<div className="res-list">
		  <div className="date-section row">
		    <p className="date">{props.reservation.date}</p>
		  </div>
		  <div className="list-item row">
		      <div className="col-sm-1">
		        <div className="img"></div>
		      </div>
		      <div className="col-sm-4 table-res-name">{ props.reservation.name }</div>
		      <div className="col-sm-2 table-res-time">Time:<br />{ props.reservation.time }</div>
		      <div className="col-sm-2 table-res-seats">Seats:<br />{ props.reservation.seats }</div>
		      <div className="col-sm-1 col-sm-offset-1 buttons">
		          <button onClick={props.toggleModal} type="submit" className="btn btn-basic btn-edit">Edit</button>
		          <button onClick={props.deleteReservation} type="submit" className="btn btn-basic btn-delete">Delete</button>
		      </div>
		  </div>
		</div>
		</li>
    );
}
