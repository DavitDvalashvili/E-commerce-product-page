import { StyledCart } from "./StylesComponents";
import product1 from "../assets/image-product-1.jpg";
import deleteIcon from "../assets/icon-delete.svg";
import { cartBoxType } from "./Types";

export const Cart = (props: cartBoxType) => {
  const price: number = 125;
  const expenditure = price * props.addAmount;

  return (
    <StyledCart>
      <h1>Cart</h1>
      {!props.addAmount && <p className="empty">Your cart is empty.</p>}
      {props.addAmount ? (
        <div>
          <div className="productBox">
            <img className="productImg" src={product1} alt="product image" />
            <div className="textBox">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                {`$${price.toFixed(2)} x ${props.addAmount}`}{" "}
                <span className="expenditure">{`$${expenditure.toFixed(
                  2
                )}`}</span>
              </p>
            </div>
            <img
              src={deleteIcon}
              alt="deleteIcon"
              onClick={() => {
                props.setAddAmount(0);
              }}
            />
          </div>
          <button
            onClick={() => {
              props.setAddAmount(0);
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        ""
      )}
    </StyledCart>
  );
};
