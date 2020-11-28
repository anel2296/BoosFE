import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Products from "../components/products/Products";
import CartList from "../components/cart/CartList";
import PRODUCTS from "../DATA";
import "../index.css";
import { Button, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import {
  addToCartAction,
  updateCartUnits,
} from "../redux/actions/cart_actions";
import { NavLink } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dropDownValue: "Select Item Category",
    };
  }

  changeValue(text) {
    this.setState({ dropDownValue: text });
  }

  render() {
    const { cart, addToCartAction, updateCartUnits } = this.props;
    return (
      <main className="pa3 pa5-ns w-100">
        <DropdownButton
          id="dropdown-item-button"
          title={this.state.dropDownValue}
          className="format"
          class="gold-outline-button"
        >
          <Dropdown.Item as="button" style={{ backgroundColor: "#FFF" }}>
            <div onClick={(e) => this.changeValue(e.target.textContent)}>
              Plates
            </div>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <div onClick={(e) => this.changeValue(e.target.textContent)}>
              Beverages
            </div>
          </Dropdown.Item>
          <Dropdown.Item as="button">
            <div onClick={(e) => this.changeValue(e.target.textContent)}>
              Desserts
            </div>
          </Dropdown.Item>
        </DropdownButton>
        <CartList cart={cart} updateCartUnits={updateCartUnits} />
        <span>Total: $ {this.props.totalPrice}</span>
        <Button
          style={{
            backgroundColor: "#642b09",
            borderColor: "#642b09",
          }}
          block
        >
          <Nav className="justify-content-center">
            <NavLink style={{ color: "#FFF", width: "200px" }} to="/ordering">
              Order
            </NavLink>
          </Nav>
        </Button>
        <Products products={PRODUCTS} addToCartAction={addToCartAction} />
      </main>
    );
  }
}

const mapStateToProps = ({ cart }) => {
  let totalPrice = 0;
  cart.map((item) => {
    totalPrice += item.price * item.units;
  });
  return {
    cart,
    totalPrice: totalPrice,
  };
};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators(
    {
      addToCartAction,
      updateCartUnits,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionsToProps)(App);
