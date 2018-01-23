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
    this.toggleModal = this.toggleModal.bind(this);
  }

  state = {
    restaurants: [],
    name: "",
    cuisine: "",
    address: "",
    phone: "",
    rating: "",
    price: "",
    isOpen: false,
    selectedRestaraunt: {},
  };

  handleClick(event) {
    const target = event.currentTarget;
    const cuisine = target.getAttribute('data-cuisine');

    API.getRestaurantsByCuisine(cuisine)
      .then((res) => {
        console.log(res.data)
        this.setState({ restaurants: res.data, name: "", address: "", phone: "", rating: "", price: "" })
      })
  }

  loadRestaurants = () => {
    API.getRestaurants()
      .then(res => {
        console.log(res.data)
        this.setState({ restaurants: res.data, name: "", address: "", phone: "", rating: "", price: "" })
      })
      .catch(err => console.log(err));
  };

  toggleModal(restaurant) {
    this.setState({
      isOpen: !this.state.isOpen,
      selectedRestaraunt: restaurant
    });
  };

  handleInput = (event) => {
    const target = event.currentTarget;

    this.setState({
      [target.name]: target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.formDate && this.state.formTime && this.state.formSeats) {
      API.saveReservation({
        date: this.state.formDate,
        name: this.state.selectedRestaraunt.name,
        time: this.state.formTime,
        seats: this.state.formSeats
      })
        .catch(err => console.log(err));
    }
  };

  handleFormUpdate = event => {
    event.preventDefault();
    if (this.state.formDate && this.state.formTime && this.state.formSeats) {
      API.saveReservation({
        date: this.state.formDate,
        name: this.state.selectedRestaraunt.name,
        time: this.state.formTime,
        seats: this.state.formSeats
      })
        .catch(err => console.log(err));
    }
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
                      <div onClick={ this.handleClick } className="italian" data-cuisine="italian"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="seafood" data-cuisine="seafood"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="chinese" data-cuisine="chinese"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="american" data-cuisine="american"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="sushi" data-cuisine="sushi"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="mexican" data-cuisine="mexican"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="noodles" data-cuisine="noodles"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="vegetarian" data-cuisine="vegan"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="indian" data-cuisine="indian"></div>
                    </div>
                    <div class="col-sm-1">
                      <div onClick={ this.handleClick } className="breakfast" data-cuisine="breakfast"></div>
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
                        <ListItem key={restaurant._id} onClick={() => this.toggleModal(restaurant)} className="list-item">
                          {this.props.children}
                            <div className="row restaurantName">
                              <strong>{restaurant.name}</strong>
                            </div>
                            <button onClick={() => this.toggleModal(restaurant)} className="make-res-button">Make Reservation</button>
                            <div className="row address" data-address={restaurant.address}>{restaurant.address}</div>
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

                <Modal show={this.state.isOpen} className={this.state.isOpen ? "showPlease" : "hidePlease"} onClose={this.toggleModal}>
                  <div className="row modal-restaurant-name">{this.state.selectedRestaraunt.name}</div>
                  <div className="row">
                    <div className="form-group col-sm-2 col-sm-offset-5">
                      <label htmlFor="date">Date</label>
                      <input type="text" className="form-control" name="formDate" value={this.state.formDate} onChange={this.handleInput}/>
                    </div>
                    <div className="form-group col-sm-2 col-sm-offset-5">
                      <label htmlFor="time">Time</label>
                      <input type="text" className="form-control" name="formTime" value={this.state.formTime} onChange={this.handleInput}/>
                    </div>
                    <div className="form-group col-sm-2 col-sm-offset-5">
                      <label htmlFor="seats">Number of Seats</label>
                      <input type="text" className="form-control" name="formSeats" value={this.state.formSeats} onChange={this.handleInput}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="res-button">
                      <button type="submit" className="btn btn-basic btn-res" disabled={!(this.state.formDate && this.state.formTime && this.state.formSeats)} onClick={this.handleFormSubmit}>Save!</button>
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


