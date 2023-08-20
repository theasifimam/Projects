import React, { useContext } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import "./cart.css";

const ContextCart = () => {
  const { item, clearCart, totalItems, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img
              src="./images/arrow.png"
              alt="arrow png"
              className="arrow-icon"
            />
            <h3>Continue Shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart png " />
            <p>{totalItems}</p>
          </div>
        </header>

        <section
          className="main-cart-section"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Shopping Cart</h1>
          <p
            className="total-items"
            style={{ fontSize: "4rem", fontWeight: "bold" }}
          >
            You have <span className="total-items-count"> {totalItems} </span>{" "}
            items in Shopping Cart
          </p>
        </section>
      </>
    );
  }
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="./images/arrow.png"
            alt="arrow png"
            className="arrow-icon"
          />
          <h3>Continue Shopping</h3>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart png " />
          <p>{totalItems}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count"> {totalItems} </span>{" "}
          items in Shopping Cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total : <span>Rs {totalAmount}</span>
          </h3>
          <button>Check-out</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
