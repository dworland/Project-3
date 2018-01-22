import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { ReservationList, ReservationListItem } from "../../components/ReservationList";
import "./Reservations.css";

class Reservations extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    reservations: [],
    name: "",
    time: "",
    seats: "",
    date: ""
  };

  // componentDidMount() {
  //   this.loadReservations();
  // };

  // loadReservations = (res) => {
  //   API.getReservations()
  //     .then(res => {
  //       console.log(res.data);
  //       console.log(this);
  //       this.setState({ reservations: res.data, name: "", time: "", seats: "" })
  //     })
        
      
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
    <div>
        <Nav />
        <div className="background">
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
                      {this.state.reservations.map(book => {
                        return (

                          <p>Test</p>

                          // <ReservationListItem key={reservation._id}>

                          // <div className="res-list">
                          //   <div className="date-section">
                          //     <div class="row">
                          //       <p className="date">Date</p>
                          //     </div>
                          //   </div>
                          //   <div className="list-item">
                          //     <div class="row">
                          //       <div className="col-sm-1">
                          //         <div className="img"></div>
                          //       </div>
                          //       <div className="col-sm-3">{ reservation.name }</div>
                          //       <div className="col-sm-2">{ reservation.time }</div>
                          //       <div className="col-sm-2">{ reservation.seats }</div>
                          //       <div className="col-sm-1">
                          //           <button type="submit" className="btn btn-basic btn-edit">Edit</button>
                          //           <button onClick={() => this.deleteReservation(reservation._id)} type="submit" className="btn btn-basic btn-delete">Delete</button>
                          //       </div>
                          //     </div>
                          //   </div>
                          // </div>

                          // </ReservationListItem>
                        );
                      })}
                    </ReservationList>
                  ) : (
                    <h3 className="no-results">You do not have any current reservations.</h3>
                  )}


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