import React from "react";

class HornedBeasts extends React.Component {
  render() {
    return (
      <div className = "hBeast">
        <h2>
          {this.props.value}
        </h2>
        <img src = "https://6erxg60qvo1qvjha44jrgpan-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/unicorns-1-700x400.jpg" alt = "" title = ""></img>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeasts;
