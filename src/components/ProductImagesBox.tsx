import { StyledImageBox } from "./StylesComponents";
import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import { useState, useEffect } from "react";
import { styleImageBox } from "./Types";
import { StyledProduct } from "./StylesComponents";

const products = [product1, product2, product3, product4];

export const ProductImagesBox = (props: styleImageBox) => {
  const [index, setIndex] = useState<number>(0);

  const [selectedProduct, setSelectedProduct] = useState<number | null>(0);

  useEffect(() => {
    const changeIndex = async () => {
      setSelectedProduct(index);
    };
    changeIndex();
  }, [index]);

  return (
    <StyledImageBox>
      <div className="productSlider">
        <img src={products[index]} />
        <div
          onClick={() => {
            {
              props.innerWidth >= 1440 ? props.setShowPopup(true) : "";
            }
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              {
                index > 0 && setIndex(index - 1);
              }
            }}
          >
            <g id="Group 18 Copy 2">
              <circle id="Oval" cx="20" cy="20" r="20" fill="white" />
              <path
                id="Path 2"
                d="M22.8572 14.2857L17.1429 20L22.8572 25.7143"
                stroke="#1D2026"
                stroke-width="3"
              />
            </g>
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              {
                index < products.length - 1 && setIndex(index + 1);
              }
            }}
          >
            <g id="Group 18 Copy 3">
              <circle id="Oval" cx="20" cy="20" r="20" fill="white" />
              <path
                id="Path 2"
                d="M17.1428 14.2857L22.8571 20L17.1428 25.7143"
                stroke="#1D2026"
                stroke-width="3"
              />
            </g>
          </svg>
        </div>
      </div>
      {props.innerWidth >= 1440 ? (
        <div className="productFlexBox">
          {products.map((product) => (
            <StyledProduct
              clicked={selectedProduct === products.indexOf(product)}
              onClick={() => {
                setIndex(products.indexOf(product));
                setSelectedProduct(products.indexOf(product));
              }}
              key={Math.random()}
            >
              <img src={product} alt="product images" />
            </StyledProduct>
          ))}
        </div>
      ) : (
        ""
      )}
    </StyledImageBox>
  );
};
