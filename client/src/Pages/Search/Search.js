import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
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
      selectedRestaraunt: restaurant,
      message: ""
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
        .then(res => {
          this.setState({ message: "You're reservation has been saved!" })
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
                    <div class="col-sm-2 col-sm-offset-1">
                      <div onClick={ this.handleClick } className="italian" data-cuisine="italian"></div>
                      <div className="label">
                        <p className="label-text">Italian</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="seafood" data-cuisine="seafood"></div>
                      <div className="label">
                        <p className="label-text">Seafood</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="chinese" data-cuisine="chinese"></div>
                      <div className="label">
                        <p className="label-text">Chinese</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="american" data-cuisine="american"></div>
                      <div className="label">
                        <p className="label-text">American</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="sushi" data-cuisine="sushi"></div>
                      <div className="label">
                        <p className="label-text">Sushi</p>
                      </div>
                    </div>
                  </div>
                  <div className="row second-row">
                    <div class="col-sm-2 col-sm-offset-1">
                      <div onClick={ this.handleClick } className="mexican" data-cuisine="mexican"></div>
                      <div className="label">
                        <p className="label-text">Mexican</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="noodles" data-cuisine="noodles"></div>
                      <div className="label">
                        <p className="label-text">Noodles</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="vegetarian" data-cuisine="vegan"></div>
                      <div className="label">
                        <p className="label-text">Vegan</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="indian" data-cuisine="indian"></div>
                      <div className="label">
                        <p className="label-text">Indian</p>
                      </div>
                    </div>
                    <div class="col-sm-2">
                      <div onClick={ this.handleClick } className="breakfast" data-cuisine="breakfast"></div>
                      <div className="label">
                        <p className="label-text">Breakfast</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="row main-row">
              <div className="col-sm-6 col-sm-offset-3 list">
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
                            <div className="row">
                            <div className="col-sm-5 phone">{restaurant.phone}</div>
                              <div className="col-sm-2 col-sm-offset-2">{ "rating: " + restaurant.rating}</div>
                              <div className="col-sm-2">{ "price: " + restaurant.price}</div>
                            </div>
                        </ListItem>
                      );
                    })}
                  </List>
                ) : (
                  <h3 className="no-results">No Results to Display</h3>
                )}

                <Modal show={this.state.isOpen} className={this.state.isOpen ? "showPlease" : "hidePlease"} onClose={this.toggleModal}>
                  {this.state.message ? 
                    <div className ="saved-message">{this.state.message}</div>
                    :
                    <div>
                      <div className="row modal-set-reservation">Set your reservation at:</div>
                      <div className="row modal-restaurant-name"><strong>{this.state.selectedRestaraunt.name}</strong></div>
                      <div className="row modal-restaurant-address">{this.state.selectedRestaraunt.address}</div>
                      <div className="row">
                        <div className="form-group col-sm-2 col-sm-offset-5">
                          <label htmlFor="date">Date</label>
                          <input type="text" className="form-control" name="formDate" placeholder="m/dd/yy" value={this.state.formDate} onChange={this.handleInput}/>
                        </div>
                        <div className="form-group col-sm-2 col-sm-offset-5">
                          <label htmlFor="time">Time</label>
                          <input type="text" className="form-control" name="formTime" placeholder="ex: 5:00PM" value={this.state.formTime} onChange={this.handleInput}/>
                        </div>
                        <div className="form-group col-sm-2 col-sm-offset-5">
                          <label htmlFor="seats">Number of Seats</label>
                          <input type="text" className="form-control" name="formSeats" placeholder="ex: 5" value={this.state.formSeats} onChange={this.handleInput}/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="res-button">
                          <button type="submit" className="btn btn-basic btn-res" disabled={!(this.state.formDate && this.state.formTime && this.state.formSeats)} onClick={this.handleFormSubmit}>Save!</button>
                        </div>
                      </div>
                    </div>
                  }
                </Modal>

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


