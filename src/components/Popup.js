import React from "react";
import { Button, Overlay, PopupBox } from "../styles/Popup";

const Popup = ({ product, onClose }) => {
  return (
    <Overlay>
      <PopupBox>
        <h2>{product.title}</h2>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Added to cart!</p>
        <Button onClick={onClose}>Close</Button>
      </PopupBox>
    </Overlay>
  );
};

export default Popup;
