import { StyledImageBox } from "./StylesComponents";
import product1 from "../assets/image-product-1.jpg"
import product2 from "../assets/image-product-2.jpg"
import product3 from "../assets/image-product-3.jpg"
import product4 from "../assets/image-product-4.jpg"
import previous from "../assets/icon-previous.svg"
import next from "../assets/icon-next.svg"
import { useState } from "react";

const products = [product1, product2, product3, product4];



export const ProductImagesBox = () => {
    const [index, setIndex] = useState<number>(0);



    return (
        <StyledImageBox>
            <div className="productSlider">
                <img src={products[index]}/>
                <div>
                    <img src={previous} id={previous} alt="previous" onClick={() => {
                        {index>0 && setIndex(index-1)}
                    }}/>
                    <img src={next} id={next} alt="next" onClick={() => {
                         {index < products.length-1 && setIndex(index+1)}
                    }}/>
                </div>
            </div>
            <div>
            </div>
        </StyledImageBox>
    )
}