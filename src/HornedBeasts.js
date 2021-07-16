import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import heart from './Red-Heart 20x20pix.png';

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokes: 0,
    };
  }

  addPoke = () => {
    this.setState({ pokes: this.state.pokes + 1});
    this.props.displayAsModal(this.props.title);
  }

  render() {
    return (
      <Card
        style={{ width: '18rem' }}
        onClick={this.addPoke}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text><img src={heart} />{this.state.pokes}
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );}
}

export default HornedBeasts;
