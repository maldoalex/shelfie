import React, { Component } from "react";
import Product from "../product/Product";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(props) {
    return (
      <div>
        {props.inventory.map((element, index) => {
          {
            element.product;
          }
        })}
      </div>
    );
  }
}

export default Dashboard;
