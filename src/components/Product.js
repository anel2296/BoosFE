import React from "react";

const Product = ({ id, name, description, img, price, addFunc }) => {
  return (
    <article
      className="mw5 w-25 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10"
      id={id}
    >
      <div className="tc">
        <img
          src={img}
          className="mw5 w-50 br-100 h4 w4 dib ba b--black-05 pa2"
          title={name}
        />
        <h1 className="f3 mb2">{name}</h1>
        <h2 className="f5 fw4 gray mt0">{description}</h2>
        <button
          onClick={() =>
            addFunc({ id, name, description, img, price, units: 1 })
          }
        >
          Add
        </button>
        <span>{price}</span>
      </div>
    </article>
  );
};

export default Product;
