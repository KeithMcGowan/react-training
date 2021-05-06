import React from "react";

class CreditCard extends React.Component {
  render() {
    console.log(this.props);

    let cardType;

    if (this.props.type === "Visa") {
      cardType = "../../../img/visa.png";
    } else {
      cardType = "../../../img/master-card.svg";
    }

    let color;

    if (this.props.bgColor === "#eeeeee") {
      color = "black";
    } else {
      color = "white";
    }

    let style = {
      background: this.props.bgColor,
      color: `${color}`,
      width: "300px",
      height: "175px",
      borderRadius: "10px",
      margin: "10px",
    };

    return (
      <div className="creditCard">
        <div style={style}>
          <img
            src={cardType}
            alt="Credit Card type"
            style={{ width: "50px" }}
          />
          <div className="cardNumber">
            <p>{this.props.number}</p>
          </div>
          <div className="cardInfo">
            <p>
              Expires {this.props.expirationMonth}/{this.props.expirationYear}
              <span> </span>
              {this.props.bank}
            </p>
            <p>{this.props.owner}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
