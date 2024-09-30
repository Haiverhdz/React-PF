import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Cart = () => {
  const { cart } = useContext(GlobalContext);
  const [cartValue, setCartValue] = useState(cart);
  const navigate = useNavigate();

  const getProductQuantity = (cart, id) => {
    return cart.filter((item) => item.id === id).length;
  };

  const total = parseFloat(
    cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)
  );

  const uniqueProducts = [...new Set(cart.map((item) => item.id))];

  const pay = () => {
    navigate("/pay");
  };

  useEffect(() => {
    setCartValue(cart);
  }, [cart]);

  return (
    <>
      <div className="container-cart">
        <h2>shopping cart</h2>
        {cart?.length === 0 ? (
          <p>your cart is empty</p>
        ) : (
          <div>
            <ul className="ul-style">
              {uniqueProducts?.map((productId) => {
                const product = cart?.find((item) => item.id === productId);
                return (
                  <li className="li-style" key={productId}>
                    <img src={product.img} alt="" />
                    <div>{product.title}</div>
                    <div>Price: ${product.price}</div>
                    <div>Quantity: {getProductQuantity(cart, productId)}</div>
                    <div>
                      subtotal: $
                      {product.price * getProductQuantity(cart, productId)}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="cart-total">
              <h3>Total: ${total}</h3>
            </div>
            <div className="container">
              <button onClick={pay} className="pay-button">Pay</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
