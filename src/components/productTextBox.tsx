import { StyledTextBox } from "./StylesComponents";
import minus from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"
import { AmountType } from "./Types";
import cart from "../assets/icon-cart2.svg"
import { useState } from "react";

export const ProductTextBox = ({setAddAmount} : AmountType) => {
  const price: number = 250;
  const discount: number = 50;
  const discountedPrice: number = price/100*discount;

  const [amount, setAmount] = useState(0);


  return (
    <StyledTextBox>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="priceBox">
        <div>
          <span className="price">{`$${discountedPrice.toFixed(2)}`}</span>
          <span className="discount">{`${discount}%`}</span>
        </div>
        <div className="discounted"> {`$${price.toFixed(2)}`} </div>
      </div>
      <div className="amountBox">
        <img src={minus} alt="minus" onClick={()=> {
            {amount>0 && setAmount(amount-1)}
        }}/>
        <span>{amount}</span>
        <img src={plus} alt="plus" onClick={()=> {
            {amount<10 && setAmount(amount+1)}
        }}/>
      </div>
      <button>
        <img src={cart} alt="cart" />
        <span
        onClick={(()=> {
          {amount ? setAddAmount(amount) : ""};
          setAmount(0)
        })}
        >Add to cart</span>
      </button>
    </StyledTextBox>
  );
};
