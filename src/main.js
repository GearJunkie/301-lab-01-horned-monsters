import React from "react";
import HornedBeasts from "./HornedBeasts.js";

class Main extends React.Component {
  render() {
    return (
      <div className = "main">

        <div>
          <HornedBeasts value={"unicorn"} description={"Horse with a freaking horn"}/>
        </div>

        <div>
          <HornedBeasts value={"dragon"} description={"A fearsome beast"} />
        </div>

      </div>
    );
  }
}

export default Main;
