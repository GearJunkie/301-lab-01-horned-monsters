import React from "react";
import data from "./data.json";
import heart from "./Red-Heart.png";
import {Container, Row, Col} from "react-bootstrap";

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokesTheBeast: 0,
      data: data
    };
  }

  poke = () => {
    this.setState({ pokesTheBeast: this.state.pokesTheBeast + 1});
  }

  render() {
    console.log(this.state.data);
    return (
      <>
        <Container>
          <Row>
            <Col>
              <img src={this.props.image_url} onClick={this.poke} />
              <h1>{this.props.title}</h1>
              <h2>{this.props.description}</h2>
              <h3>{this.props.keyword}</h3>
              <h3>{this.props.horns}</h3>
              <span>Number of times favorited: {this.state.pokesTheBeast}</span>
              <img src={heart} />
            </Col>
          </Row>
        </Container>
      </>);
  }
}
export default HornedBeasts;
