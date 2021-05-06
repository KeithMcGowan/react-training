import React from "react";

class Random extends React.Component {
  render() {
    // console.log(this.props);

    let randomNumber = Math.floor(
      Math.random() * (this.props.max - this.props.min + 1) + this.props.min
    );

    return (
      <div className="random">
        <h2>
          Random value between {this.props.min} and {this.props.max} =>{" "}
          {randomNumber}
        </h2>
      </div>
    );
  }
}

export default Random;
