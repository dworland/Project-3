import React from "react";
import ListItem from "./ListItem"
import Modal from ".Modal"
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul className="list-group">
      	<div onClick={ this.toggleModal }> {children} </div>
      </ul>

      <Modal show={ this.state.isOpen }
        onClose={ this.toggleModal }>
        <div className="row">
        	<div className="res-image"></div>
        </div>
        <div className="row">
        	<div className="form-group">
      			<label htmlFor="name">Time</label>
      			<input type="text" className="form-control" name="time" />
    			</div>
    			<div className="form-group">
      			<label htmlFor="seats">Number of seats</label>
      			<input type="text" className="form-control" name="seats" />
    			</div>
    			<div className="submit-button">
      			<button type="submit" className="btn btn-basic btn-submit">Submit</button>
   				</div>
        </div>
      </Modal>
    </div>
  );
};

export default List;