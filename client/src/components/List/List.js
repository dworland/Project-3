import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-container">
      <ul className="list-group">
      	<div onClick={ this.toggleModal }> {children} </div>
      </ul>

    </div>
  );
};

export default List;