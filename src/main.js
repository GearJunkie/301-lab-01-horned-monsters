import React from 'react';
import data from './data.json';
import HornedBeasts from './HornedBeasts.js';
import {Container} from 'react-bootstrap';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

   beastArr = (data) => {
     let newArr = data.map( (value) => 
       <HornedBeasts 
         title={value.title} 
         image_url={value.image_url} 
         description={value.description} 
         horns={value.horns}
         key={value.image_url}/>
     );
     return newArr;
   };

   render() {
     return (
       <div className = "main">
         <Container>
           {this.beastArr(data)}
         </Container>
       </div>
     );
   }
}

export default Main;
