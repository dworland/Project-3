import React from "react";
import { Container, Row, Col } from "../../components/Grid";
import "./Cuisines.css";

const Cuisines = () => (
	<div className="cuisines">
		<Row>
			<Col size="sm-1 md-1">
				<div className="italian"></div>
			</Col>
			<Col size="sm-1 md-1">
				<div className="seafood"></div>
			</Col>
			<Col size="sm-1 md-1">
				<div className="chinese"></div>
			</Col>
			<Col size="sm-1 md-1">
				<div className="american"></div>
			</Col>
			<Col size="sm-1 md-1">
				<div className="vegetarian"></div>
			</Col>
			<Col size="sm-1 md-1">
				<div className="sushi"></div>
			</Col>
			<Col size="sm-1 md-1">
				<div className="mexican"></div>
			</Col>
			<Col size="sm-1 md-1">
				<div className="breakfast"></div>
			</Col>
		</Row>
	</div>
);

export default Cuisines;