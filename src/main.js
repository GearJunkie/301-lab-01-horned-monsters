import React from "react";
import data from "./data.json";
import HornedBeasts from "./HornedBeasts.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

   beastArr = (data) => {
     let newArr = data.map( (value) => {
       return <HornedBeasts title={value.title} description={value.description}/>;
     });
     return newArr;
   };

   render() {
     return (
       <div className = "main">
         {this.beastArr(data)}
       </div>
     );
   }
}

export default Main;
