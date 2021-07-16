import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts.js';

class Main extends React.Component {
  //------My render beasts cards--------//
 render() {
    return (
      <div id="beastCards">
        <CardColumns>
          {this.props.beasts.map( (beast, index) =>
            <HornedBeasts
              title={beast.title}
              image={beast.image_url}
              description={beast.description}
              horns={beast.horns}
              key={index}
              displayAsModal={this.props.displayAsModal}
            />
          )};
        </CardColumns>
      </div>
    );
  }
}

export default Main;
