import React from "react";

class Greetings extends React.Component {
  render() {
    // console.log(this.props);

    let hello = "Hello";

    if (this.props.lang === "de") hello = "Hallo";
    else if (this.props.lang === "fr") hello = "Bonjour";

    return (
      <div className="greeting">
        <h2 className={this.props.lang}>
          {hello} {this.props.children}
        </h2>
      </div>
    );
  }
}

export default Greetings;
