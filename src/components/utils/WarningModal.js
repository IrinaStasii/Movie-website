import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class WarningModal extends Component {
  constructor() {
    super();
    this.state = {
      isWarningModalOpen: false,
    };
  }
  toggleOpenWarningModal = () => {
    this.setState({
      isWarningModalOpen: !this.state.isWarningModalOpen,
    });
  };
  deleteMovie(movieId) {
    console.log("deleted:" + movieId);
    let url = `https://movies-app-siit.herokuapp.com/movies/${movieId}`;
    var myHeaders = new Headers();
    myHeaders.append("X-Auth-Token", localStorage.getItem("access_token"));

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      });

    this.toggleOpenWarningModal();
    // this.props.history.goBack();
  }

  render() {
    const { movieId, key } = this.props;

    return (
      <div className="modalWrapper">
        <button
          id="DELETE"
          type="button"
          className="btn btn-outline-light"
          onClick={this.toggleOpenWarningModal}
        >
          DELETE
        </button>
        <Modal show={this.state.isWarningModalOpen}>
          <Modal.Header>
            <Modal.Title>Warning</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete this movie?</Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.toggleOpenWarningModal()}
            >
              No
            </Button>
            <Button variant="primary" onClick={() => this.deleteMovie(movieId)}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default WarningModal;
