import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import Modal from "../../components/Modal";
import { ReservationList, ReservationListItem } from "../../components/ReservationList";
import "./Reservations.css";

class Reservations extends Component {

  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
  }

  state = {
    reservations: [],
    name: "",
    time: "",
    seats: "",
    date: "",
    isOpen: false,
    selectedRestaraunt: {},
  };

  componentDidMount() {
    this.loadReservations();
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

  deleteReservation = id => {
    API.deleteReservation(id)
      .then(res => this.loadReservations())
      .catch(err => console.log(err));
  };

  loadReservations = (res) => {
    API.getReservations()
      .then(res => {
        this.setState({ reservations: res.data, date: "", name: "", time: "", seats: "" })
      })
        
      
      .catch(err => console.log(err));
  };

  editReservation = event => {
    event.preventDefault();
    if (this.state.formDate && this.state.formTime && this.state.formSeats) {
      API.getReservationById()
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
        <div className="reservation-background">
          <div className="margin">
            <div className="container table-container">
              <div className="row">
                <h3 className="page-title">Reservations</h3>
                <hr />
              </div>
              <div className="row">
                <div class="table">


                  {this.state.reservations.length ? (
                    <ReservationList>
                      {this.state.reservations.map(reservation => {
                        return (

                          <ReservationListItem key={reservation._id}>

                          <div className="res-list">
                            <div className="date-section row">
                              <p className="date">{reservation.date}</p>
                            </div>
                            <div className="list-item row">
                                <div className="col-sm-1">
                                  <div className="img"></div>
                                </div>
                                <div className="col-sm-4 table-res-name">{ reservation.name }</div>
                                <div className="col-sm-2 table-res-time">Time:<br />{ reservation.time }</div>
                                <div className="col-sm-2 table-res-seats">Seats:<br />{ reservation.seats }</div>
                                <div className="col-sm-1 col-sm-offset-1 buttons">
                                    <button onClick={() => this.toggleModal(reservation)} type="submit" className="btn btn-basic btn-edit">Edit</button>
                                    <button onClick={() => this.deleteReservation(reservation._id)} type="submit" className="btn btn-basic btn-delete">Delete</button>
                                </div>
                            </div>
                          </div>

                          </ReservationListItem>
                        );
                      })}
                    </ReservationList>
                  ) : (
                    <h3 className="no-results">You do not have any current reservations.</h3>
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
                      <button type="submit" className="btn btn-basic btn-res" disabled={!(this.state.formDate && this.state.formTime && this.state.formSeats)} onClick={this.editReservation}>Save!</button>
                    </div>
                  </div>
                </Modal>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Reservations;