import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      image_url: "",
      product: "",
      price: ""
    };
    this.handleUrl = this.handleUrl.bind(this);
    this.handleProduct = this.handleProduct.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.baseState = this.state;
  }

  handleUrl(event) {
    this.setState({ image_url: event.target.value });
  }

  handleProduct(event) {
    this.setState({ product: event.target.value });
  }

  handlePrice(event) {
    this.setState({ price: event.target.value });
  }

  handleCancel = () => {
    this.setState(this.baseState);
  };

  render() {
    return (
      <div className="form" onSubmit={this.handleUpdate}>
        <form>
          <input
            placeholder="Image URL"
            name="image_url"
            onChange={this.handleUrl}
          />
          <input
            placeholder="product"
            name="product"
            onChange={this.handleProduct}
          />
          <input placeholder="price" name="price" onChange={this.handlePrice} />
          <button className="add-btn">Add to Inventory</button>
          <button className="cancel-btn" onClick={this.handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
