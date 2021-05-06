import React from "react";

class BoxColor extends React.Component {
  render() {
    // console.log(this.props);

    let color;

    if (this.props.r === 255 && this.props.g === 0 && this.props.b === 0) {
      color = "white";
    } else {
      color = "black";
    }

    const boxColorStyle = {
      backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
      height: "150px",
      width: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexFlow: "column",
      fontSize: "2em",
      margin: "0 auto 20px",
      border: "2px solid black",
      color: `${color}`,
      lineHeight: "0.25px",
    };

    let boxColorHex = (
      (1 << 24) +
      (this.props.r << 16) +
      (this.props.g << 8) +
      this.props.b
    )
      .toString(16)
      .slice(1);

    return (
      <div style={boxColorStyle}>
        <p>
          rgb({this.props.r}, {this.props.g}, {this.props.b})
        </p>
        <p>#{boxColorHex}</p>
      </div>
    );
  }
}

export default BoxColor;
