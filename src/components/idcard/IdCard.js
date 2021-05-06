import React from "react";

class IdCard extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="idCard">
        <img src={this.props.picture} alt="Profile Pic" className="picture" />
        <div className="idCardInfo">
          <label className="firstName">
            <b>Fist name:</b> {this.props.firstName}
          </label>
          <label className="lastName">
            <b>Last name:</b> {this.props.lastName}
          </label>
          <label className="gender">
            <b>Gender:</b> {this.props.gender}
          </label>
          <label className="height">
            <b>Height:</b> {this.props.height}m
          </label>
          <label className="birth">
            <b>Birth:</b> {this.props.birth.toDateString()}
          </label>
        </div>
      </div>
    );
  }
}

export default IdCard;
