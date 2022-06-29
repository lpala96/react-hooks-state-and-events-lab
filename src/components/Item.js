import React, { useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleClick() {
    setInCart((inCart) => !inCart)
  }

  const cartClass = inCart ? "" : "in-cart"
  const cartText = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass} onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
