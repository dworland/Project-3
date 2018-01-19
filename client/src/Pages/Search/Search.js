import React, { Component } from "react";
import Nav from "../../components/Nav";
import Cuisines from "../../components/Cuisines";
import MapContainer from "../../components/MapContainer";
import Footer from "../../components/Footer";
import Table from "../../components/Table";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import "./Search.css";

class Search extends Component {

  state = {
    restaurants: [],
    name: "",
    cuisine: "",
    address: "",
    phone: "",
    rating: "",
    price: ""
  };

  // handleClick() {
  //   componentDidMount();
  // };

  // componentDidMount() {
  //   this.loadRestaurants();
  // };

  // loadRestaurants = () => {
  //   API.getRestaurants()
  //     .then(res =>
  //       this.setState({ restaurants: res.data, cuisine: "", address: "", phone: "", rating: "", price: "" })
  //     )
  //     .catch(err => console.log(err));
  // };


  render() {
    return (
      <div>
        <Nav />
        <div className="background">
          <div className="map-margin">
            <div className="container cuisine-container">
              <div className="row cuisine-icons">
                <div className="prompt">
                  <p>Choose a cuisine</p>
                </div>
                <Cuisines />
              </div>
            </div>
            <div className="row main-row">
              <div className="col-sm-3 list">
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => {
                      return (
                        <ListItem key={restaurant._id}>
                          <a href={"/restaurants/" + restaurant._id}>
                            <strong>
                             {restaurant.name} {restaurant.cuisine} {restaurant.address} {restaurant.phone} {restaurant.rating} {restaurant.price}
                            </strong>
                          </a>
                        </ListItem>
                      );
                    })}
                  </List>
                )}
              </div>
              <div className="col-sm-9 map">
              <MapContainer />
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Search;