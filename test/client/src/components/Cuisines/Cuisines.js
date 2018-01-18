import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import "./Cuisines.css";

const Cuisines = () => (
	<Row>
		<Col size="sm-1 sm-offset-1">
			<div className="italian"></div>
		</Col>
		<Col size="sm-1">
			<div className="seafood"></div>
		</Col>
		<Col size="sm-1">
			<div className="chinese"></div>
		</Col>
		<Col size="sm-1">
			<div className="american"></div>
		</Col>
		<Col size="sm-1">
			<div className="vegetarian"></div>
		</Col>
		<Col size="sm-1">
			<div className="sushi"></div>
		</Col>
		<Col size="sm-1">
			<div className="mexican"></div>
		</Col>
		<Col size="sm-1">
			<div className="noodles"></div>
		</Col>
		<Col size="sm-1">
			<div className="indian"></div>
		</Col>
		<Col size="sm-1">
			<div className="breakfast"></div>
		</Col>
	</Row>
);

export default Cuisines;