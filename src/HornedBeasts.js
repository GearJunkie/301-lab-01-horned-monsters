import React from "react";
import data from "./data.json";
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
        <h1>{this.props.title}</h1>
        {/* <h2>{this.state.data[0].description}</h2> */}
      </>
    );
  }
}







// {/* //this is lab 01 code//
//   render() {
//     return (
//       <div className = "hBeast">
//         <h2>
//           {this.props.value}
//         </h2>
//         <img src = "https://6erxg60qvo1qvjha44jrgpan-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/unicorns-1-700x400.jpg" alt = "" title = ""></img>
//         <p>{this.props.description}</p>
//       </div>
//     );
//   } */}

export default HornedBeasts;
