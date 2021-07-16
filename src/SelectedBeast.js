import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.pokedBeast.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card onClick={this.displayAsModal}>
              <Card.Img variant="top" src={this.props.pokedBeast.image_url} />
              <Card.Body>
                <Card.Title>{this.props.pokedBeast.title}</Card.Title>
                <Card.Text>{this.props.pokedBeast.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.props.closeModal} variant="secondary">Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    );
  }

}

export default SelectedBeast;
