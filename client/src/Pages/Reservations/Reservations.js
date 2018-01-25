import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import EditModal from "../../components/EditModal";
import { ReservationListItem } from "../../components/ReservationList";
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
      selectedRestaraunt: restaurant,
      selectedId: restaurant._id,
      message: ""
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
      API.updateReservationById(this.state.selectedId, {
        date: this.state.formDate,
        time: this.state.formTime,
        seats: this.state.formSeats
      })
        .then(res => {
          this.setState({ message: "You're reservation has been updated!" })
          this.loadReservations()
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
              <div className="container res-table-container">
                <div className="row">
                  <h3 className="page-title">Reservations</h3>
                  <hr />
                </div>
                {this.state.reservations.length ? (
                  <ul style={{listStyle: "none"}}>
                    {this.state.reservations.map(reservation => {
                      return (
                        <ReservationListItem
                          reservation={reservation}
                          toggleModal={() => this.toggleModal(reservation)}
                          deleteReservation={() => this.deleteReservation(reservation._id)}
                        />
                      );
                    })}
                  </ul>
                ) : (
                  <h3 className="no-res-results">You do not have any current reservations.</h3>
                )}

                <EditModal show={this.state.isOpen} className={this.state.isOpen ? "showPlease" : "hidePlease"} onClose={this.toggleModal}>
                  {this.state.message ? 
                    <div className="update-message">{this.state.message}</div>
                    :
                    <div>
                      <div className="row modal-restaurant-name">Edit your reservation at:</div>
                      <div className="row modal-restaurant-name"><strong>{this.state.selectedRestaraunt.name}</strong></div>
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
                          <button type="submit" className="btn btn-basic btn-res" disabled={!(this.state.formDate && this.state.formTime && this.state.formSeats)} onClick={this.editReservation}>Save!</button>
                        </div>
                      </div>
                    </div>
                  }
                </EditModal>

              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Reservations;