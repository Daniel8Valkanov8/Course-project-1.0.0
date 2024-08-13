import React, { Component } from "react";
import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus"


import CreateReservationComponent from "../CreateReservation";
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      isAuthorized: false, // Add a new state to track authorization
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      (response) => {
        this.setState({
          content: response.data,
          isAuthorized: true, // Set isAuthorized to true if the request is successful
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
          isAuthorized: false, // Set isAuthorized to false if there's an error
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron1">
          <h1>Create Reservation</h1>
          <h3>{this.state.content}</h3>
          {/* Conditionally render the Location component if the user is authorized */}
          {this.state.isAuthorized && <CreateReservationComponent />}
        </header>
      </div>
    );
  }
}
