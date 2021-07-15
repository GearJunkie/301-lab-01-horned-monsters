import React from 'react';
import HornedBeasts from './HornedBeasts.js';
// import {Card, Container} from 'react-bootstrap';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //------My render beasts cards--------//
//   render () {
//     return(
//       <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="image_url" />
//   <Card.Body>
//     <Card.Title>{this.props.title}</Card.Title>
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>
//     )
//   }

  //-------My render beasts array--------//
  render() {
    return (
      <div className = "main">
        <Container>
          {this.props.data.map( (value) =>
            <HornedBeasts
              title={value.title}
              image_url={value.image_url}
              description={value.description}
              horns={value.horns}
              key={value.image_url}/>
          )};
        </Container>
      </div>
    );
  }
}

export default Main;
