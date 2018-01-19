import React from "react";
import { Container, Row, div } from "../../components/Grid";
import "./Cuisines.css";

class Cuisines extends React.Component {
	// cusineSearch = (event) => {
	// 	const currentTarget = event.currentTarget;
	// 	const cuisine = currentTarget.name;

	// 	axios.get(`/cuisines/${cuisine}`)
	// 		.then((data`) => {
	// 			this.setState({ data })
	// 		});
	// }

	render() {
		return (
			<Row>
				<div class="col-sm-1 col-sm-offset-1">
					<div onClick={this.handleClick} className="italian" name="italian"></div>
				</div>
				<div class="col-sm-1">
					<div className="seafood"></div>
				</div>
				<div class="col-sm-1">
					<div className="chinese"></div>
				</div>
				<div class="col-sm-1">
					<div className="american"></div>
				</div>
				<div class="col-sm-1">
					<div className="sushi"></div>
				</div>
				<div class="col-sm-1">
					<div className="mexican"></div>
				</div>
				<div class="col-sm-1">
					<div className="noodles"></div>
				</div>
				<div class="col-sm-1">
					<div className="vegetarian"></div>
				</div>
				<div class="col-sm-1">
					<div className="indian"></div>
				</div>
				<div class="col-sm-1">
					<div className="breakfast"></div>
				</div>
			</Row>
		);
	}
}

export default Cuisines;