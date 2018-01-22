import React, { Component } from "react";
import Nav from "../../components/Nav";
import MapContainer from "../../components/MapContainer";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import PropTypes from 'prop-types';
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    restaurants: [],
    name: "",
    cuisine: "",
    address: "",
    phone: "",
    rating: "",
    price: "",
    isOpen: false
  };

  handleClick() {
    this.loadRestaurants();
  }

  loadRestaurants = () => {
    API.getRestaurants()
      .then(res => {
        console.log(res.data)
        this.setState({ restaurants: res.data, name: "", address: "", phone: "", rating: "", price: "" })
      })
      .catch(err => console.log(err));
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };


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
                <div className="cuisines">

                  <div className="row">
                    <div class="col-sm-1 col-sm-offset-1">
                      <div onClick={ this.handleClick } className="italian" id="italian"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="seafood" id="seafood"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="chinese"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="american"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="sushi"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="mexican"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="noodles"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="vegetarian"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="indian"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="breakfast"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="row main-row">
              <div className="col-sm-3 list">
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => {
                      return (
                        <ListItem key={restaurant._id} onClick={this.toggleModal} className="list-item">
                          {this.props.children}
                            <div className="row restaurantName">
                              <strong>{restaurant.name}</strong>
                            </div>
                            <div className="row address">{restaurant.address}</div>
                            <div className="row phone">{restaurant.phone}</div>
                            <div className="row">
                              <div className="col-sm-4 col-sm-offset-4">{ "rating: " + restaurant.rating}</div>
                              <div className="col-sm-4">{ "price: " + restaurant.price}</div>
                            </div>
                        </ListItem>
                      );
                    })}
                  </List>
                ) : (
                  <h3 className="no-results">No Results to Display</h3>
                )}

                <Modal show={this.state.isOpen} onClose={this.toggleModal}>
                  <div className="row">Restaurant Name</div>
                  <div className="row">
                    <div className="form-group">
                      <label htmlFor="time">Time</label>
                      <input type="text" className="form-control" name="time" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="seats">Number of Seats</label>
                      <input type="text" className="form-control" name="seats" />
                    </div>
                    <div className="res-button">
                      <button type="submit" className="btn btn-basic btn-res">Save!</button>
                    </div>
                  </div>
                </Modal>

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


